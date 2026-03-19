/**
 * In-browser semantic search using Transformers.js
 * Loads a pre-computed embedding index and runs query embedding in the browser.
 */

interface SchemaEmbeddings {
  model: string;
  dimensions: number;
  embeddings: Record<string, number[]>;
}

interface SemanticResult {
  key: string;
  score: number;
}

let embeddingsData: SchemaEmbeddings | null = null;
let embedderPromise: Promise<any> | null = null;
let isModelLoading = false;

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function loadEmbeddings(): Promise<boolean> {
  if (embeddingsData) return true;
  try {
    const response = await fetch('/dist/schema-embeddings.json');
    embeddingsData = await response.json();
    return true;
  } catch (e) {
    console.error('Failed to load schema embeddings:', e);
    return false;
  }
}

function getEmbedder(): Promise<any> {
  if (embedderPromise) return embedderPromise;
  isModelLoading = true;

  embedderPromise = (async () => {
    // Dynamically import from CDN to avoid bundling into single-file HTML
    const { pipeline } = await import(
      /* @vite-ignore */
      'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3'
    );
    const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
      dtype: 'fp32',
    });
    isModelLoading = false;
    return embedder;
  })();

  embedderPromise.catch(() => {
    isModelLoading = false;
    embedderPromise = null;
  });

  return embedderPromise;
}

export function getModelLoadingState(): boolean {
  return isModelLoading;
}

export async function semanticSearch(query: string): Promise<SemanticResult[]> {
  if (!embeddingsData) return [];

  const embedder = await getEmbedder();
  const result = await embedder(query, { pooling: 'mean', normalize: true });
  const queryEmbedding = Array.from(result.data) as number[];

  const results: SemanticResult[] = [];
  for (const [key, embedding] of Object.entries(embeddingsData.embeddings)) {
    const score = cosineSimilarity(queryEmbedding, embedding);
    results.push({ key, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results;
}
