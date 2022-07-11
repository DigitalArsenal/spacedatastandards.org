//https://github.com/octokit/webhooks/blob/master/payload-types/schema.d.ts
export interface PackageFile {
    download_url: string;
    id: number;
    name: string;
    sha256: string;
    sha1: string;
    md5: string;
    content_type: string;
    state: string;
    size: number;
    created_at: string;
    updated_at: string;
    data: {
        content: any
    }
}

export class Repository {
    owner: string = "digitalarsenal";
    repo: string = "spacedatastandards.org";
    path: string = "standards";
}