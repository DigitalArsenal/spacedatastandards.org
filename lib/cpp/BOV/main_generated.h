// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_MAIN_H_
#define FLATBUFFERS_GENERATED_MAIN_H_

#include "flatbuffers/flatbuffers.h"

// Ensure the included flatbuffers.h is the same version as when this file was
// generated, otherwise it may not be compatible.
static_assert(FLATBUFFERS_VERSION_MAJOR == 24 &&
              FLATBUFFERS_VERSION_MINOR == 3 &&
              FLATBUFFERS_VERSION_REVISION == 25,
             "Non-compatible flatbuffers version included");

struct BOV;
struct BOVBuilder;

/// Burn Out Vector Message
struct BOV FLATBUFFERS_FINAL_CLASS : private ::flatbuffers::Table {
  typedef BOVBuilder Builder;
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_E_COORDINATE = 4,
    VT_F_COORDINATE = 6,
    VT_G_COORDINATE = 8,
    VT_E_DOT = 10,
    VT_F_DOT = 12,
    VT_G_DOT = 14,
    VT_EPOCH = 16,
    VT_TIME_FROM_LAUNCH = 18
  };
  double E_COORDINATE() const {
    return GetField<double>(VT_E_COORDINATE, 0.0);
  }
  double F_COORDINATE() const {
    return GetField<double>(VT_F_COORDINATE, 0.0);
  }
  double G_COORDINATE() const {
    return GetField<double>(VT_G_COORDINATE, 0.0);
  }
  double E_DOT() const {
    return GetField<double>(VT_E_DOT, 0.0);
  }
  double F_DOT() const {
    return GetField<double>(VT_F_DOT, 0.0);
  }
  double G_DOT() const {
    return GetField<double>(VT_G_DOT, 0.0);
  }
  const ::flatbuffers::String *EPOCH() const {
    return GetPointer<const ::flatbuffers::String *>(VT_EPOCH);
  }
  double TIME_FROM_LAUNCH() const {
    return GetField<double>(VT_TIME_FROM_LAUNCH, 0.0);
  }
  bool Verify(::flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<double>(verifier, VT_E_COORDINATE, 8) &&
           VerifyField<double>(verifier, VT_F_COORDINATE, 8) &&
           VerifyField<double>(verifier, VT_G_COORDINATE, 8) &&
           VerifyField<double>(verifier, VT_E_DOT, 8) &&
           VerifyField<double>(verifier, VT_F_DOT, 8) &&
           VerifyField<double>(verifier, VT_G_DOT, 8) &&
           VerifyOffset(verifier, VT_EPOCH) &&
           verifier.VerifyString(EPOCH()) &&
           VerifyField<double>(verifier, VT_TIME_FROM_LAUNCH, 8) &&
           verifier.EndTable();
  }
};

struct BOVBuilder {
  typedef BOV Table;
  ::flatbuffers::FlatBufferBuilder &fbb_;
  ::flatbuffers::uoffset_t start_;
  void add_E_COORDINATE(double E_COORDINATE) {
    fbb_.AddElement<double>(BOV::VT_E_COORDINATE, E_COORDINATE, 0.0);
  }
  void add_F_COORDINATE(double F_COORDINATE) {
    fbb_.AddElement<double>(BOV::VT_F_COORDINATE, F_COORDINATE, 0.0);
  }
  void add_G_COORDINATE(double G_COORDINATE) {
    fbb_.AddElement<double>(BOV::VT_G_COORDINATE, G_COORDINATE, 0.0);
  }
  void add_E_DOT(double E_DOT) {
    fbb_.AddElement<double>(BOV::VT_E_DOT, E_DOT, 0.0);
  }
  void add_F_DOT(double F_DOT) {
    fbb_.AddElement<double>(BOV::VT_F_DOT, F_DOT, 0.0);
  }
  void add_G_DOT(double G_DOT) {
    fbb_.AddElement<double>(BOV::VT_G_DOT, G_DOT, 0.0);
  }
  void add_EPOCH(::flatbuffers::Offset<::flatbuffers::String> EPOCH) {
    fbb_.AddOffset(BOV::VT_EPOCH, EPOCH);
  }
  void add_TIME_FROM_LAUNCH(double TIME_FROM_LAUNCH) {
    fbb_.AddElement<double>(BOV::VT_TIME_FROM_LAUNCH, TIME_FROM_LAUNCH, 0.0);
  }
  explicit BOVBuilder(::flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  ::flatbuffers::Offset<BOV> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = ::flatbuffers::Offset<BOV>(end);
    return o;
  }
};

inline ::flatbuffers::Offset<BOV> CreateBOV(
    ::flatbuffers::FlatBufferBuilder &_fbb,
    double E_COORDINATE = 0.0,
    double F_COORDINATE = 0.0,
    double G_COORDINATE = 0.0,
    double E_DOT = 0.0,
    double F_DOT = 0.0,
    double G_DOT = 0.0,
    ::flatbuffers::Offset<::flatbuffers::String> EPOCH = 0,
    double TIME_FROM_LAUNCH = 0.0) {
  BOVBuilder builder_(_fbb);
  builder_.add_TIME_FROM_LAUNCH(TIME_FROM_LAUNCH);
  builder_.add_G_DOT(G_DOT);
  builder_.add_F_DOT(F_DOT);
  builder_.add_E_DOT(E_DOT);
  builder_.add_G_COORDINATE(G_COORDINATE);
  builder_.add_F_COORDINATE(F_COORDINATE);
  builder_.add_E_COORDINATE(E_COORDINATE);
  builder_.add_EPOCH(EPOCH);
  return builder_.Finish();
}

inline ::flatbuffers::Offset<BOV> CreateBOVDirect(
    ::flatbuffers::FlatBufferBuilder &_fbb,
    double E_COORDINATE = 0.0,
    double F_COORDINATE = 0.0,
    double G_COORDINATE = 0.0,
    double E_DOT = 0.0,
    double F_DOT = 0.0,
    double G_DOT = 0.0,
    const char *EPOCH = nullptr,
    double TIME_FROM_LAUNCH = 0.0) {
  auto EPOCH__ = EPOCH ? _fbb.CreateString(EPOCH) : 0;
  return CreateBOV(
      _fbb,
      E_COORDINATE,
      F_COORDINATE,
      G_COORDINATE,
      E_DOT,
      F_DOT,
      G_DOT,
      EPOCH__,
      TIME_FROM_LAUNCH);
}

inline const BOV *GetBOV(const void *buf) {
  return ::flatbuffers::GetRoot<BOV>(buf);
}

inline const BOV *GetSizePrefixedBOV(const void *buf) {
  return ::flatbuffers::GetSizePrefixedRoot<BOV>(buf);
}

inline const char *BOVIdentifier() {
  return "$BOV";
}

inline bool BOVBufferHasIdentifier(const void *buf) {
  return ::flatbuffers::BufferHasIdentifier(
      buf, BOVIdentifier());
}

inline bool SizePrefixedBOVBufferHasIdentifier(const void *buf) {
  return ::flatbuffers::BufferHasIdentifier(
      buf, BOVIdentifier(), true);
}

inline bool VerifyBOVBuffer(
    ::flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<BOV>(BOVIdentifier());
}

inline bool VerifySizePrefixedBOVBuffer(
    ::flatbuffers::Verifier &verifier) {
  return verifier.VerifySizePrefixedBuffer<BOV>(BOVIdentifier());
}

inline void FinishBOVBuffer(
    ::flatbuffers::FlatBufferBuilder &fbb,
    ::flatbuffers::Offset<BOV> root) {
  fbb.Finish(root, BOVIdentifier());
}

inline void FinishSizePrefixedBOVBuffer(
    ::flatbuffers::FlatBufferBuilder &fbb,
    ::flatbuffers::Offset<BOV> root) {
  fbb.FinishSizePrefixed(root, BOVIdentifier());
}

#endif  // FLATBUFFERS_GENERATED_MAIN_H_
