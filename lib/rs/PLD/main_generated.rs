// automatically generated by the FlatBuffers compiler, do not modify


// @generated

use crate::main_generated::*;
use core::mem;
use core::cmp::Ordering;

extern crate flatbuffers;
use self::flatbuffers::{EndianScalar, Follow};

pub enum PLDOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Payload Information
pub struct PLD<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for PLD<'a> {
  type Inner = PLD<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> PLD<'a> {
  pub const VT_PAYLOAD_DURATION: flatbuffers::VOffsetT = 4;
  pub const VT_MASS_AT_LAUNCH: flatbuffers::VOffsetT = 6;
  pub const VT_DIMENSIONS: flatbuffers::VOffsetT = 8;
  pub const VT_SOLAR_ARRAY_AREA: flatbuffers::VOffsetT = 10;
  pub const VT_SOLAR_ARRAY_DIMENSIONS: flatbuffers::VOffsetT = 12;
  pub const VT_NOMINAL_OPERATIONAL_LIFETIME: flatbuffers::VOffsetT = 14;
  pub const VT_INSTRUMENTS: flatbuffers::VOffsetT = 16;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    PLD { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args PLDArgs<'args>
  ) -> flatbuffers::WIPOffset<PLD<'bldr>> {
    let mut builder = PLDBuilder::new(_fbb);
    if let Some(x) = args.INSTRUMENTS { builder.add_INSTRUMENTS(x); }
    if let Some(x) = args.NOMINAL_OPERATIONAL_LIFETIME { builder.add_NOMINAL_OPERATIONAL_LIFETIME(x); }
    if let Some(x) = args.SOLAR_ARRAY_DIMENSIONS { builder.add_SOLAR_ARRAY_DIMENSIONS(x); }
    builder.add_SOLAR_ARRAY_AREA(args.SOLAR_ARRAY_AREA);
    if let Some(x) = args.DIMENSIONS { builder.add_DIMENSIONS(x); }
    builder.add_MASS_AT_LAUNCH(args.MASS_AT_LAUNCH);
    if let Some(x) = args.PAYLOAD_DURATION { builder.add_PAYLOAD_DURATION(x); }
    builder.finish()
  }

  pub fn unpack(&self) -> PLDT {
    let PAYLOAD_DURATION = self.PAYLOAD_DURATION().map(|x| {
      x.to_string()
    });
    let MASS_AT_LAUNCH = self.MASS_AT_LAUNCH();
    let DIMENSIONS = self.DIMENSIONS().map(|x| {
      x.to_string()
    });
    let SOLAR_ARRAY_AREA = self.SOLAR_ARRAY_AREA();
    let SOLAR_ARRAY_DIMENSIONS = self.SOLAR_ARRAY_DIMENSIONS().map(|x| {
      x.to_string()
    });
    let NOMINAL_OPERATIONAL_LIFETIME = self.NOMINAL_OPERATIONAL_LIFETIME().map(|x| {
      x.to_string()
    });
    let INSTRUMENTS = self.INSTRUMENTS().map(|x| {
      x.iter().map(|t| t.unpack()).collect()
    });
    PLDT {
      PAYLOAD_DURATION,
      MASS_AT_LAUNCH,
      DIMENSIONS,
      SOLAR_ARRAY_AREA,
      SOLAR_ARRAY_DIMENSIONS,
      NOMINAL_OPERATIONAL_LIFETIME,
      INSTRUMENTS,
    }
  }

  #[inline]
  pub fn PAYLOAD_DURATION(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(PLD::VT_PAYLOAD_DURATION, None)}
  }
  #[inline]
  pub fn MASS_AT_LAUNCH(&self) -> f32 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<f32>(PLD::VT_MASS_AT_LAUNCH, Some(0.0)).unwrap()}
  }
  #[inline]
  pub fn DIMENSIONS(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(PLD::VT_DIMENSIONS, None)}
  }
  #[inline]
  pub fn SOLAR_ARRAY_AREA(&self) -> f32 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<f32>(PLD::VT_SOLAR_ARRAY_AREA, Some(0.0)).unwrap()}
  }
  #[inline]
  pub fn SOLAR_ARRAY_DIMENSIONS(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(PLD::VT_SOLAR_ARRAY_DIMENSIONS, None)}
  }
  #[inline]
  pub fn NOMINAL_OPERATIONAL_LIFETIME(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(PLD::VT_NOMINAL_OPERATIONAL_LIFETIME, None)}
  }
  #[inline]
  pub fn INSTRUMENTS(&self) -> Option<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<IDM<'a>>>> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<IDM>>>>(PLD::VT_INSTRUMENTS, None)}
  }
}

impl flatbuffers::Verifiable for PLD<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("PAYLOAD_DURATION", Self::VT_PAYLOAD_DURATION, false)?
     .visit_field::<f32>("MASS_AT_LAUNCH", Self::VT_MASS_AT_LAUNCH, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("DIMENSIONS", Self::VT_DIMENSIONS, false)?
     .visit_field::<f32>("SOLAR_ARRAY_AREA", Self::VT_SOLAR_ARRAY_AREA, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("SOLAR_ARRAY_DIMENSIONS", Self::VT_SOLAR_ARRAY_DIMENSIONS, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("NOMINAL_OPERATIONAL_LIFETIME", Self::VT_NOMINAL_OPERATIONAL_LIFETIME, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, flatbuffers::ForwardsUOffset<IDM>>>>("INSTRUMENTS", Self::VT_INSTRUMENTS, false)?
     .finish();
    Ok(())
  }
}
pub struct PLDArgs<'a> {
    pub PAYLOAD_DURATION: Option<flatbuffers::WIPOffset<&'a str>>,
    pub MASS_AT_LAUNCH: f32,
    pub DIMENSIONS: Option<flatbuffers::WIPOffset<&'a str>>,
    pub SOLAR_ARRAY_AREA: f32,
    pub SOLAR_ARRAY_DIMENSIONS: Option<flatbuffers::WIPOffset<&'a str>>,
    pub NOMINAL_OPERATIONAL_LIFETIME: Option<flatbuffers::WIPOffset<&'a str>>,
    pub INSTRUMENTS: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<IDM<'a>>>>>,
}
impl<'a> Default for PLDArgs<'a> {
  #[inline]
  fn default() -> Self {
    PLDArgs {
      PAYLOAD_DURATION: None,
      MASS_AT_LAUNCH: 0.0,
      DIMENSIONS: None,
      SOLAR_ARRAY_AREA: 0.0,
      SOLAR_ARRAY_DIMENSIONS: None,
      NOMINAL_OPERATIONAL_LIFETIME: None,
      INSTRUMENTS: None,
    }
  }
}

pub struct PLDBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> PLDBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_PAYLOAD_DURATION(&mut self, PAYLOAD_DURATION: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(PLD::VT_PAYLOAD_DURATION, PAYLOAD_DURATION);
  }
  #[inline]
  pub fn add_MASS_AT_LAUNCH(&mut self, MASS_AT_LAUNCH: f32) {
    self.fbb_.push_slot::<f32>(PLD::VT_MASS_AT_LAUNCH, MASS_AT_LAUNCH, 0.0);
  }
  #[inline]
  pub fn add_DIMENSIONS(&mut self, DIMENSIONS: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(PLD::VT_DIMENSIONS, DIMENSIONS);
  }
  #[inline]
  pub fn add_SOLAR_ARRAY_AREA(&mut self, SOLAR_ARRAY_AREA: f32) {
    self.fbb_.push_slot::<f32>(PLD::VT_SOLAR_ARRAY_AREA, SOLAR_ARRAY_AREA, 0.0);
  }
  #[inline]
  pub fn add_SOLAR_ARRAY_DIMENSIONS(&mut self, SOLAR_ARRAY_DIMENSIONS: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(PLD::VT_SOLAR_ARRAY_DIMENSIONS, SOLAR_ARRAY_DIMENSIONS);
  }
  #[inline]
  pub fn add_NOMINAL_OPERATIONAL_LIFETIME(&mut self, NOMINAL_OPERATIONAL_LIFETIME: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(PLD::VT_NOMINAL_OPERATIONAL_LIFETIME, NOMINAL_OPERATIONAL_LIFETIME);
  }
  #[inline]
  pub fn add_INSTRUMENTS(&mut self, INSTRUMENTS: flatbuffers::WIPOffset<flatbuffers::Vector<'b , flatbuffers::ForwardsUOffset<IDM<'b >>>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(PLD::VT_INSTRUMENTS, INSTRUMENTS);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> PLDBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    PLDBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<PLD<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for PLD<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("PLD");
      ds.field("PAYLOAD_DURATION", &self.PAYLOAD_DURATION());
      ds.field("MASS_AT_LAUNCH", &self.MASS_AT_LAUNCH());
      ds.field("DIMENSIONS", &self.DIMENSIONS());
      ds.field("SOLAR_ARRAY_AREA", &self.SOLAR_ARRAY_AREA());
      ds.field("SOLAR_ARRAY_DIMENSIONS", &self.SOLAR_ARRAY_DIMENSIONS());
      ds.field("NOMINAL_OPERATIONAL_LIFETIME", &self.NOMINAL_OPERATIONAL_LIFETIME());
      ds.field("INSTRUMENTS", &self.INSTRUMENTS());
      ds.finish()
  }
}
#[non_exhaustive]
#[derive(Debug, Clone, PartialEq)]
pub struct PLDT {
  pub PAYLOAD_DURATION: Option<String>,
  pub MASS_AT_LAUNCH: f32,
  pub DIMENSIONS: Option<String>,
  pub SOLAR_ARRAY_AREA: f32,
  pub SOLAR_ARRAY_DIMENSIONS: Option<String>,
  pub NOMINAL_OPERATIONAL_LIFETIME: Option<String>,
  pub INSTRUMENTS: Option<Vec<IDMT>>,
}
impl Default for PLDT {
  fn default() -> Self {
    Self {
      PAYLOAD_DURATION: None,
      MASS_AT_LAUNCH: 0.0,
      DIMENSIONS: None,
      SOLAR_ARRAY_AREA: 0.0,
      SOLAR_ARRAY_DIMENSIONS: None,
      NOMINAL_OPERATIONAL_LIFETIME: None,
      INSTRUMENTS: None,
    }
  }
}
impl PLDT {
  pub fn pack<'b, A: flatbuffers::Allocator + 'b>(
    &self,
    _fbb: &mut flatbuffers::FlatBufferBuilder<'b, A>
  ) -> flatbuffers::WIPOffset<PLD<'b>> {
    let PAYLOAD_DURATION = self.PAYLOAD_DURATION.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let MASS_AT_LAUNCH = self.MASS_AT_LAUNCH;
    let DIMENSIONS = self.DIMENSIONS.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let SOLAR_ARRAY_AREA = self.SOLAR_ARRAY_AREA;
    let SOLAR_ARRAY_DIMENSIONS = self.SOLAR_ARRAY_DIMENSIONS.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let NOMINAL_OPERATIONAL_LIFETIME = self.NOMINAL_OPERATIONAL_LIFETIME.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let INSTRUMENTS = self.INSTRUMENTS.as_ref().map(|x|{
      let w: Vec<_> = x.iter().map(|t| t.pack(_fbb)).collect();_fbb.create_vector(&w)
    });
    PLD::create(_fbb, &PLDArgs{
      PAYLOAD_DURATION,
      MASS_AT_LAUNCH,
      DIMENSIONS,
      SOLAR_ARRAY_AREA,
      SOLAR_ARRAY_DIMENSIONS,
      NOMINAL_OPERATIONAL_LIFETIME,
      INSTRUMENTS,
    })
  }
}
#[inline]
/// Verifies that a buffer of bytes contains a `PLD`
/// and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_PLD_unchecked`.
pub fn root_as_PLD(buf: &[u8]) -> Result<PLD, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root::<PLD>(buf)
}
#[inline]
/// Verifies that a buffer of bytes contains a size prefixed
/// `PLD` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `size_prefixed_root_as_PLD_unchecked`.
pub fn size_prefixed_root_as_PLD(buf: &[u8]) -> Result<PLD, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root::<PLD>(buf)
}
#[inline]
/// Verifies, with the given options, that a buffer of bytes
/// contains a `PLD` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_PLD_unchecked`.
pub fn root_as_PLD_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<PLD<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root_with_opts::<PLD<'b>>(opts, buf)
}
#[inline]
/// Verifies, with the given verifier options, that a buffer of
/// bytes contains a size prefixed `PLD` and returns
/// it. Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_PLD_unchecked`.
pub fn size_prefixed_root_as_PLD_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<PLD<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root_with_opts::<PLD<'b>>(opts, buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a PLD and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid `PLD`.
pub unsafe fn root_as_PLD_unchecked(buf: &[u8]) -> PLD {
  flatbuffers::root_unchecked::<PLD>(buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a size prefixed PLD and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid size prefixed `PLD`.
pub unsafe fn size_prefixed_root_as_PLD_unchecked(buf: &[u8]) -> PLD {
  flatbuffers::size_prefixed_root_unchecked::<PLD>(buf)
}
pub const PLD_IDENTIFIER: &str = "$PLD";

#[inline]
pub fn PLD_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, PLD_IDENTIFIER, false)
}

#[inline]
pub fn PLD_size_prefixed_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, PLD_IDENTIFIER, true)
}

#[inline]
pub fn finish_PLD_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(
    fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
    root: flatbuffers::WIPOffset<PLD<'a>>) {
  fbb.finish(root, Some(PLD_IDENTIFIER));
}

#[inline]
pub fn finish_size_prefixed_PLD_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>, root: flatbuffers::WIPOffset<PLD<'a>>) {
  fbb.finish_size_prefixed(root, Some(PLD_IDENTIFIER));
}
