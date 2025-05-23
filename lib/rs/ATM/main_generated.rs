// automatically generated by the FlatBuffers compiler, do not modify


// @generated

use core::mem;
use core::cmp::Ordering;

extern crate flatbuffers;
use self::flatbuffers::{EndianScalar, Follow};

#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
pub const ENUM_MIN_ATMOSPHERIC_MODEL_FAMILY: i8 = 0;
#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
pub const ENUM_MAX_ATMOSPHERIC_MODEL_FAMILY: i8 = 16;
#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
#[allow(non_camel_case_types)]
pub const ENUM_VALUES_ATMOSPHERIC_MODEL_FAMILY: [AtmosphericModelFamily; 17] = [
  AtmosphericModelFamily::CIRA_XX,
  AtmosphericModelFamily::DTM_XX,
  AtmosphericModelFamily::GITM,
  AtmosphericModelFamily::GOST,
  AtmosphericModelFamily::GRAM_XX,
  AtmosphericModelFamily::HP,
  AtmosphericModelFamily::JAC_HASDM,
  AtmosphericModelFamily::JAC_GILL,
  AtmosphericModelFamily::JB08,
  AtmosphericModelFamily::JR71,
  AtmosphericModelFamily::JXX,
  AtmosphericModelFamily::MET_XX,
  AtmosphericModelFamily::MSIS_86,
  AtmosphericModelFamily::MSISE_90,
  AtmosphericModelFamily::NRLMSIS00E,
  AtmosphericModelFamily::TIECGM,
  AtmosphericModelFamily::USSA_XX,
];

/// Canonical list of atmosphere model families per CCSDS SANA registry.
/// Use the `YEAR` field in the ATM message to specify the variant implementation.
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Default)]
#[repr(transparent)]
pub struct AtmosphericModelFamily(pub i8);
#[allow(non_upper_case_globals)]
impl AtmosphericModelFamily {
  /// OID: 1.3.112.4.57.9.1
  /// COSPAR International Reference Atmosphere
  /// Known years: 1965, 1972, 1986, 1990
  pub const CIRA_XX: Self = Self(0);
  /// OID: 1.3.112.4.57.9.2
  /// Drag Temperature Model
  /// Known years: 1978, 1994, 2000, 2009, 2012, 2013, 2020
  pub const DTM_XX: Self = Self(1);
  /// OID: 1.3.112.4.57.9.3
  /// Global Ionosphere-Thermosphere Model
  /// GITM has no specific year versions defined
  pub const GITM: Self = Self(2);
  /// OID: 1.3.112.4.57.9.4
  /// GOST atmospheric density model
  /// Known version: 2004 (GOST R 25645.166-2004)
  pub const GOST: Self = Self(3);
  /// OID: 1.3.112.4.57.9.5
  /// Global Reference Atmospheric Model
  /// Known version: 2016
  pub const GRAM_XX: Self = Self(4);
  /// OID: 1.3.112.4.57.9.6
  /// Harris-Priester empirical model
  /// Known version: 1962
  pub const HP: Self = Self(5);
  /// OID: 1.3.112.4.57.9.7
  /// Jacchia atmosphere model with HASDM correction overlay
  /// Based on Jacchia 1970 with HASDM (DCA) overlay
  pub const JAC_HASDM: Self = Self(6);
  /// OID: 1.3.112.4.57.9.8
  /// Jacchia-Gill bi-polynomial interpolation
  /// Interpolates Jacchia 1971
  pub const JAC_GILL: Self = Self(7);
  /// OID: 1.3.112.4.57.9.9
  /// Jacchia-Bowman empirical model
  /// Known versions: 2006 (JB2006), 2008 (JB2008)
  pub const JB08: Self = Self(8);
  /// OID: 1.3.112.4.57.9.10
  /// Jacchia-Roberts analytic model
  /// Known version: 1971
  pub const JR71: Self = Self(9);
  /// OID: 1.3.112.4.57.9.11
  /// Jacchia static diffusion models
  /// Known years: 1970, 1971, 1977
  pub const JXX: Self = Self(10);
  /// OID: 1.3.112.4.57.9.12
  /// Marshall Engineering Thermosphere
  /// Known version: 2007
  pub const MET_XX: Self = Self(11);
  /// OID: 1.3.112.4.57.9.13
  /// MSIS empirical model
  /// Known version: 1986
  pub const MSIS_86: Self = Self(12);
  /// OID: 1.3.112.4.57.9.14
  /// MSISE empirical model with exosphere extension
  /// Known version: 1990
  pub const MSISE_90: Self = Self(13);
  /// OID: 1.3.112.4.57.9.15
  /// NRLMSISE empirical model
  /// Known version: 2000 (NRLMSISE-00E)
  pub const NRLMSIS00E: Self = Self(14);
  /// OID: 1.3.112.4.57.9.16
  /// Thermosphere-Ionosphere Electrodynamic General Circulation Model
  /// Based on TIME-GCM, no version specified
  pub const TIECGM: Self = Self(15);
  /// OID: 1.3.112.4.57.9.17
  /// U.S. Standard Atmosphere
  /// Known versions: 1962, 1976
  pub const USSA_XX: Self = Self(16);

  pub const ENUM_MIN: i8 = 0;
  pub const ENUM_MAX: i8 = 16;
  pub const ENUM_VALUES: &'static [Self] = &[
    Self::CIRA_XX,
    Self::DTM_XX,
    Self::GITM,
    Self::GOST,
    Self::GRAM_XX,
    Self::HP,
    Self::JAC_HASDM,
    Self::JAC_GILL,
    Self::JB08,
    Self::JR71,
    Self::JXX,
    Self::MET_XX,
    Self::MSIS_86,
    Self::MSISE_90,
    Self::NRLMSIS00E,
    Self::TIECGM,
    Self::USSA_XX,
  ];
  /// Returns the variant's name or "" if unknown.
  pub fn variant_name(self) -> Option<&'static str> {
    match self {
      Self::CIRA_XX => Some("CIRA_XX"),
      Self::DTM_XX => Some("DTM_XX"),
      Self::GITM => Some("GITM"),
      Self::GOST => Some("GOST"),
      Self::GRAM_XX => Some("GRAM_XX"),
      Self::HP => Some("HP"),
      Self::JAC_HASDM => Some("JAC_HASDM"),
      Self::JAC_GILL => Some("JAC_GILL"),
      Self::JB08 => Some("JB08"),
      Self::JR71 => Some("JR71"),
      Self::JXX => Some("JXX"),
      Self::MET_XX => Some("MET_XX"),
      Self::MSIS_86 => Some("MSIS_86"),
      Self::MSISE_90 => Some("MSISE_90"),
      Self::NRLMSIS00E => Some("NRLMSIS00E"),
      Self::TIECGM => Some("TIECGM"),
      Self::USSA_XX => Some("USSA_XX"),
      _ => None,
    }
  }
}
impl core::fmt::Debug for AtmosphericModelFamily {
  fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
    if let Some(name) = self.variant_name() {
      f.write_str(name)
    } else {
      f.write_fmt(format_args!("<UNKNOWN {:?}>", self.0))
    }
  }
}
impl<'a> flatbuffers::Follow<'a> for AtmosphericModelFamily {
  type Inner = Self;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    let b = flatbuffers::read_scalar_at::<i8>(buf, loc);
    Self(b)
  }
}

impl flatbuffers::Push for AtmosphericModelFamily {
    type Output = AtmosphericModelFamily;
    #[inline]
    unsafe fn push(&self, dst: &mut [u8], _written_len: usize) {
        flatbuffers::emplace_scalar::<i8>(dst, self.0);
    }
}

impl flatbuffers::EndianScalar for AtmosphericModelFamily {
  type Scalar = i8;
  #[inline]
  fn to_little_endian(self) -> i8 {
    self.0.to_le()
  }
  #[inline]
  #[allow(clippy::wrong_self_convention)]
  fn from_little_endian(v: i8) -> Self {
    let b = i8::from_le(v);
    Self(b)
  }
}

impl<'a> flatbuffers::Verifiable for AtmosphericModelFamily {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    i8::run_verifier(v, pos)
  }
}

impl flatbuffers::SimpleToVerifyInSlice for AtmosphericModelFamily {}
pub enum ATMOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Atmospheric Model Message
pub struct ATM<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for ATM<'a> {
  type Inner = ATM<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> ATM<'a> {
  pub const VT_MODEL: flatbuffers::VOffsetT = 4;
  pub const VT_YEAR: flatbuffers::VOffsetT = 6;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    ATM { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args ATMArgs
  ) -> flatbuffers::WIPOffset<ATM<'bldr>> {
    let mut builder = ATMBuilder::new(_fbb);
    builder.add_YEAR(args.YEAR);
    builder.add_MODEL(args.MODEL);
    builder.finish()
  }

  pub fn unpack(&self) -> ATMT {
    let MODEL = self.MODEL();
    let YEAR = self.YEAR();
    ATMT {
      MODEL,
      YEAR,
    }
  }

  /// Canonical model family
  #[inline]
  pub fn MODEL(&self) -> AtmosphericModelFamily {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<AtmosphericModelFamily>(ATM::VT_MODEL, Some(AtmosphericModelFamily::CIRA_XX)).unwrap()}
  }
  /// Four-digit year identifying the model version (e.g., 1970, 2008, 2020)
  #[inline]
  pub fn YEAR(&self) -> i32 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<i32>(ATM::VT_YEAR, Some(0)).unwrap()}
  }
}

impl flatbuffers::Verifiable for ATM<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<AtmosphericModelFamily>("MODEL", Self::VT_MODEL, false)?
     .visit_field::<i32>("YEAR", Self::VT_YEAR, false)?
     .finish();
    Ok(())
  }
}
pub struct ATMArgs {
    pub MODEL: AtmosphericModelFamily,
    pub YEAR: i32,
}
impl<'a> Default for ATMArgs {
  #[inline]
  fn default() -> Self {
    ATMArgs {
      MODEL: AtmosphericModelFamily::CIRA_XX,
      YEAR: 0,
    }
  }
}

pub struct ATMBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> ATMBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_MODEL(&mut self, MODEL: AtmosphericModelFamily) {
    self.fbb_.push_slot::<AtmosphericModelFamily>(ATM::VT_MODEL, MODEL, AtmosphericModelFamily::CIRA_XX);
  }
  #[inline]
  pub fn add_YEAR(&mut self, YEAR: i32) {
    self.fbb_.push_slot::<i32>(ATM::VT_YEAR, YEAR, 0);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> ATMBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    ATMBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<ATM<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for ATM<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("ATM");
      ds.field("MODEL", &self.MODEL());
      ds.field("YEAR", &self.YEAR());
      ds.finish()
  }
}
#[non_exhaustive]
#[derive(Debug, Clone, PartialEq)]
pub struct ATMT {
  pub MODEL: AtmosphericModelFamily,
  pub YEAR: i32,
}
impl Default for ATMT {
  fn default() -> Self {
    Self {
      MODEL: AtmosphericModelFamily::CIRA_XX,
      YEAR: 0,
    }
  }
}
impl ATMT {
  pub fn pack<'b, A: flatbuffers::Allocator + 'b>(
    &self,
    _fbb: &mut flatbuffers::FlatBufferBuilder<'b, A>
  ) -> flatbuffers::WIPOffset<ATM<'b>> {
    let MODEL = self.MODEL;
    let YEAR = self.YEAR;
    ATM::create(_fbb, &ATMArgs{
      MODEL,
      YEAR,
    })
  }
}
#[inline]
/// Verifies that a buffer of bytes contains a `ATM`
/// and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_ATM_unchecked`.
pub fn root_as_ATM(buf: &[u8]) -> Result<ATM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root::<ATM>(buf)
}
#[inline]
/// Verifies that a buffer of bytes contains a size prefixed
/// `ATM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `size_prefixed_root_as_ATM_unchecked`.
pub fn size_prefixed_root_as_ATM(buf: &[u8]) -> Result<ATM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root::<ATM>(buf)
}
#[inline]
/// Verifies, with the given options, that a buffer of bytes
/// contains a `ATM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_ATM_unchecked`.
pub fn root_as_ATM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<ATM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root_with_opts::<ATM<'b>>(opts, buf)
}
#[inline]
/// Verifies, with the given verifier options, that a buffer of
/// bytes contains a size prefixed `ATM` and returns
/// it. Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_ATM_unchecked`.
pub fn size_prefixed_root_as_ATM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<ATM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root_with_opts::<ATM<'b>>(opts, buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a ATM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid `ATM`.
pub unsafe fn root_as_ATM_unchecked(buf: &[u8]) -> ATM {
  flatbuffers::root_unchecked::<ATM>(buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a size prefixed ATM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid size prefixed `ATM`.
pub unsafe fn size_prefixed_root_as_ATM_unchecked(buf: &[u8]) -> ATM {
  flatbuffers::size_prefixed_root_unchecked::<ATM>(buf)
}
pub const ATM_IDENTIFIER: &str = "$ATM";

#[inline]
pub fn ATM_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, ATM_IDENTIFIER, false)
}

#[inline]
pub fn ATM_size_prefixed_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, ATM_IDENTIFIER, true)
}

#[inline]
pub fn finish_ATM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(
    fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
    root: flatbuffers::WIPOffset<ATM<'a>>) {
  fbb.finish(root, Some(ATM_IDENTIFIER));
}

#[inline]
pub fn finish_size_prefixed_ATM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>, root: flatbuffers::WIPOffset<ATM<'a>>) {
  fbb.finish_size_prefixed(root, Some(ATM_IDENTIFIER));
}
