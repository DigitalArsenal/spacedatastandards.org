// automatically generated by the FlatBuffers compiler, do not modify


// @generated

use core::mem;
use core::cmp::Ordering;

extern crate flatbuffers;
use self::flatbuffers::{EndianScalar, Follow};

pub enum OSMOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Observation Stability Message
pub struct OSM<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for OSM<'a> {
  type Inner = OSM<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> OSM<'a> {
  pub const VT_IS_STABLE: flatbuffers::VOffsetT = 4;
  pub const VT_NUM_OBS: flatbuffers::VOffsetT = 6;
  pub const VT_OBJECT_ID: flatbuffers::VOffsetT = 8;
  pub const VT_ID_SENSOR: flatbuffers::VOffsetT = 10;
  pub const VT_PASS_START: flatbuffers::VOffsetT = 12;
  pub const VT_PASS_DURATION: flatbuffers::VOffsetT = 14;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    OSM { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args OSMArgs<'args>
  ) -> flatbuffers::WIPOffset<OSM<'bldr>> {
    let mut builder = OSMBuilder::new(_fbb);
    builder.add_PASS_DURATION(args.PASS_DURATION);
    if let Some(x) = args.PASS_START { builder.add_PASS_START(x); }
    if let Some(x) = args.ID_SENSOR { builder.add_ID_SENSOR(x); }
    if let Some(x) = args.OBJECT_ID { builder.add_OBJECT_ID(x); }
    builder.add_NUM_OBS(args.NUM_OBS);
    builder.add_IS_STABLE(args.IS_STABLE);
    builder.finish()
  }

  pub fn unpack(&self) -> OSMT {
    let IS_STABLE = self.IS_STABLE();
    let NUM_OBS = self.NUM_OBS();
    let OBJECT_ID = self.OBJECT_ID().map(|x| {
      x.to_string()
    });
    let ID_SENSOR = self.ID_SENSOR().map(|x| {
      x.to_string()
    });
    let PASS_START = self.PASS_START().map(|x| {
      x.to_string()
    });
    let PASS_DURATION = self.PASS_DURATION();
    OSMT {
      IS_STABLE,
      NUM_OBS,
      OBJECT_ID,
      ID_SENSOR,
      PASS_START,
      PASS_DURATION,
    }
  }

  /// Indicates whether the observation is stable or not
  #[inline]
  pub fn IS_STABLE(&self) -> bool {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<bool>(OSM::VT_IS_STABLE, Some(false)).unwrap()}
  }
  /// The number of observations
  #[inline]
  pub fn NUM_OBS(&self) -> i32 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<i32>(OSM::VT_NUM_OBS, Some(0)).unwrap()}
  }
  /// Unique identifier for the object being observed
  #[inline]
  pub fn OBJECT_ID(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(OSM::VT_OBJECT_ID, None)}
  }
  /// Identifier of the sensor
  #[inline]
  pub fn ID_SENSOR(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(OSM::VT_ID_SENSOR, None)}
  }
  /// Timestamp of data creation
  #[inline]
  pub fn PASS_START(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(OSM::VT_PASS_START, None)}
  }
  /// Duration of the observation pass in seconds
  #[inline]
  pub fn PASS_DURATION(&self) -> i32 {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<i32>(OSM::VT_PASS_DURATION, Some(0)).unwrap()}
  }
}

impl flatbuffers::Verifiable for OSM<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<bool>("IS_STABLE", Self::VT_IS_STABLE, false)?
     .visit_field::<i32>("NUM_OBS", Self::VT_NUM_OBS, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("OBJECT_ID", Self::VT_OBJECT_ID, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("ID_SENSOR", Self::VT_ID_SENSOR, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("PASS_START", Self::VT_PASS_START, false)?
     .visit_field::<i32>("PASS_DURATION", Self::VT_PASS_DURATION, false)?
     .finish();
    Ok(())
  }
}
pub struct OSMArgs<'a> {
    pub IS_STABLE: bool,
    pub NUM_OBS: i32,
    pub OBJECT_ID: Option<flatbuffers::WIPOffset<&'a str>>,
    pub ID_SENSOR: Option<flatbuffers::WIPOffset<&'a str>>,
    pub PASS_START: Option<flatbuffers::WIPOffset<&'a str>>,
    pub PASS_DURATION: i32,
}
impl<'a> Default for OSMArgs<'a> {
  #[inline]
  fn default() -> Self {
    OSMArgs {
      IS_STABLE: false,
      NUM_OBS: 0,
      OBJECT_ID: None,
      ID_SENSOR: None,
      PASS_START: None,
      PASS_DURATION: 0,
    }
  }
}

pub struct OSMBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> OSMBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_IS_STABLE(&mut self, IS_STABLE: bool) {
    self.fbb_.push_slot::<bool>(OSM::VT_IS_STABLE, IS_STABLE, false);
  }
  #[inline]
  pub fn add_NUM_OBS(&mut self, NUM_OBS: i32) {
    self.fbb_.push_slot::<i32>(OSM::VT_NUM_OBS, NUM_OBS, 0);
  }
  #[inline]
  pub fn add_OBJECT_ID(&mut self, OBJECT_ID: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(OSM::VT_OBJECT_ID, OBJECT_ID);
  }
  #[inline]
  pub fn add_ID_SENSOR(&mut self, ID_SENSOR: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(OSM::VT_ID_SENSOR, ID_SENSOR);
  }
  #[inline]
  pub fn add_PASS_START(&mut self, PASS_START: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(OSM::VT_PASS_START, PASS_START);
  }
  #[inline]
  pub fn add_PASS_DURATION(&mut self, PASS_DURATION: i32) {
    self.fbb_.push_slot::<i32>(OSM::VT_PASS_DURATION, PASS_DURATION, 0);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> OSMBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    OSMBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<OSM<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for OSM<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("OSM");
      ds.field("IS_STABLE", &self.IS_STABLE());
      ds.field("NUM_OBS", &self.NUM_OBS());
      ds.field("OBJECT_ID", &self.OBJECT_ID());
      ds.field("ID_SENSOR", &self.ID_SENSOR());
      ds.field("PASS_START", &self.PASS_START());
      ds.field("PASS_DURATION", &self.PASS_DURATION());
      ds.finish()
  }
}
#[non_exhaustive]
#[derive(Debug, Clone, PartialEq)]
pub struct OSMT {
  pub IS_STABLE: bool,
  pub NUM_OBS: i32,
  pub OBJECT_ID: Option<String>,
  pub ID_SENSOR: Option<String>,
  pub PASS_START: Option<String>,
  pub PASS_DURATION: i32,
}
impl Default for OSMT {
  fn default() -> Self {
    Self {
      IS_STABLE: false,
      NUM_OBS: 0,
      OBJECT_ID: None,
      ID_SENSOR: None,
      PASS_START: None,
      PASS_DURATION: 0,
    }
  }
}
impl OSMT {
  pub fn pack<'b, A: flatbuffers::Allocator + 'b>(
    &self,
    _fbb: &mut flatbuffers::FlatBufferBuilder<'b, A>
  ) -> flatbuffers::WIPOffset<OSM<'b>> {
    let IS_STABLE = self.IS_STABLE;
    let NUM_OBS = self.NUM_OBS;
    let OBJECT_ID = self.OBJECT_ID.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let ID_SENSOR = self.ID_SENSOR.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let PASS_START = self.PASS_START.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let PASS_DURATION = self.PASS_DURATION;
    OSM::create(_fbb, &OSMArgs{
      IS_STABLE,
      NUM_OBS,
      OBJECT_ID,
      ID_SENSOR,
      PASS_START,
      PASS_DURATION,
    })
  }
}
#[inline]
/// Verifies that a buffer of bytes contains a `OSM`
/// and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_OSM_unchecked`.
pub fn root_as_OSM(buf: &[u8]) -> Result<OSM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root::<OSM>(buf)
}
#[inline]
/// Verifies that a buffer of bytes contains a size prefixed
/// `OSM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `size_prefixed_root_as_OSM_unchecked`.
pub fn size_prefixed_root_as_OSM(buf: &[u8]) -> Result<OSM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root::<OSM>(buf)
}
#[inline]
/// Verifies, with the given options, that a buffer of bytes
/// contains a `OSM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_OSM_unchecked`.
pub fn root_as_OSM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<OSM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root_with_opts::<OSM<'b>>(opts, buf)
}
#[inline]
/// Verifies, with the given verifier options, that a buffer of
/// bytes contains a size prefixed `OSM` and returns
/// it. Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_OSM_unchecked`.
pub fn size_prefixed_root_as_OSM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<OSM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root_with_opts::<OSM<'b>>(opts, buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a OSM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid `OSM`.
pub unsafe fn root_as_OSM_unchecked(buf: &[u8]) -> OSM {
  flatbuffers::root_unchecked::<OSM>(buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a size prefixed OSM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid size prefixed `OSM`.
pub unsafe fn size_prefixed_root_as_OSM_unchecked(buf: &[u8]) -> OSM {
  flatbuffers::size_prefixed_root_unchecked::<OSM>(buf)
}
pub const OSM_IDENTIFIER: &str = "$OSM";

#[inline]
pub fn OSM_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, OSM_IDENTIFIER, false)
}

#[inline]
pub fn OSM_size_prefixed_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, OSM_IDENTIFIER, true)
}

#[inline]
pub fn finish_OSM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(
    fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
    root: flatbuffers::WIPOffset<OSM<'a>>) {
  fbb.finish(root, Some(OSM_IDENTIFIER));
}

#[inline]
pub fn finish_size_prefixed_OSM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>, root: flatbuffers::WIPOffset<OSM<'a>>) {
  fbb.finish_size_prefixed(root, Some(OSM_IDENTIFIER));
}
