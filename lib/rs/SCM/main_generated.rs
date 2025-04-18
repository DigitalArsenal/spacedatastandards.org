// automatically generated by the FlatBuffers compiler, do not modify


// @generated

use core::mem;
use core::cmp::Ordering;

extern crate flatbuffers;
use self::flatbuffers::{EndianScalar, Follow};

pub enum SCHEMA_STANDARDOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Schema Standard Definition
pub struct SCHEMA_STANDARD<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for SCHEMA_STANDARD<'a> {
  type Inner = SCHEMA_STANDARD<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> SCHEMA_STANDARD<'a> {
  pub const VT_KEY: flatbuffers::VOffsetT = 4;
  pub const VT_IDL: flatbuffers::VOffsetT = 6;
  pub const VT_FILES: flatbuffers::VOffsetT = 8;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    SCHEMA_STANDARD { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args SCHEMA_STANDARDArgs<'args>
  ) -> flatbuffers::WIPOffset<SCHEMA_STANDARD<'bldr>> {
    let mut builder = SCHEMA_STANDARDBuilder::new(_fbb);
    if let Some(x) = args.files { builder.add_files(x); }
    if let Some(x) = args.idl { builder.add_idl(x); }
    if let Some(x) = args.key { builder.add_key(x); }
    builder.finish()
  }

  pub fn unpack(&self) -> SCHEMA_STANDARDT {
    let key = self.key().map(|x| {
      x.to_string()
    });
    let idl = self.idl().map(|x| {
      x.to_string()
    });
    let files = self.files().map(|x| {
      x.iter().map(|s| s.to_string()).collect()
    });
    SCHEMA_STANDARDT {
      key,
      idl,
      files,
    }
  }

  /// Unique identifier for the standard
  #[inline]
  pub fn key(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(SCHEMA_STANDARD::VT_KEY, None)}
  }
  /// IDL
  #[inline]
  pub fn idl(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(SCHEMA_STANDARD::VT_IDL, None)}
  }
  /// List Of File Paths
  #[inline]
  pub fn files(&self) -> Option<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<&'a str>>> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<&'a str>>>>(SCHEMA_STANDARD::VT_FILES, None)}
  }
}

impl flatbuffers::Verifiable for SCHEMA_STANDARD<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("key", Self::VT_KEY, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("idl", Self::VT_IDL, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, flatbuffers::ForwardsUOffset<&'_ str>>>>("files", Self::VT_FILES, false)?
     .finish();
    Ok(())
  }
}
pub struct SCHEMA_STANDARDArgs<'a> {
    pub key: Option<flatbuffers::WIPOffset<&'a str>>,
    pub idl: Option<flatbuffers::WIPOffset<&'a str>>,
    pub files: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<&'a str>>>>,
}
impl<'a> Default for SCHEMA_STANDARDArgs<'a> {
  #[inline]
  fn default() -> Self {
    SCHEMA_STANDARDArgs {
      key: None,
      idl: None,
      files: None,
    }
  }
}

pub struct SCHEMA_STANDARDBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> SCHEMA_STANDARDBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_key(&mut self, key: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(SCHEMA_STANDARD::VT_KEY, key);
  }
  #[inline]
  pub fn add_idl(&mut self, idl: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(SCHEMA_STANDARD::VT_IDL, idl);
  }
  #[inline]
  pub fn add_files(&mut self, files: flatbuffers::WIPOffset<flatbuffers::Vector<'b , flatbuffers::ForwardsUOffset<&'b  str>>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(SCHEMA_STANDARD::VT_FILES, files);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> SCHEMA_STANDARDBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    SCHEMA_STANDARDBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<SCHEMA_STANDARD<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for SCHEMA_STANDARD<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("SCHEMA_STANDARD");
      ds.field("key", &self.key());
      ds.field("idl", &self.idl());
      ds.field("files", &self.files());
      ds.finish()
  }
}
#[non_exhaustive]
#[derive(Debug, Clone, PartialEq)]
pub struct SCHEMA_STANDARDT {
  pub key: Option<String>,
  pub idl: Option<String>,
  pub files: Option<Vec<String>>,
}
impl Default for SCHEMA_STANDARDT {
  fn default() -> Self {
    Self {
      key: None,
      idl: None,
      files: None,
    }
  }
}
impl SCHEMA_STANDARDT {
  pub fn pack<'b, A: flatbuffers::Allocator + 'b>(
    &self,
    _fbb: &mut flatbuffers::FlatBufferBuilder<'b, A>
  ) -> flatbuffers::WIPOffset<SCHEMA_STANDARD<'b>> {
    let key = self.key.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let idl = self.idl.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let files = self.files.as_ref().map(|x|{
      let w: Vec<_> = x.iter().map(|s| _fbb.create_string(s)).collect();_fbb.create_vector(&w)
    });
    SCHEMA_STANDARD::create(_fbb, &SCHEMA_STANDARDArgs{
      key,
      idl,
      files,
    })
  }
}
pub enum SCMOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Schema Manifest
pub struct SCM<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for SCM<'a> {
  type Inner = SCM<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> SCM<'a> {
  pub const VT_VERSION: flatbuffers::VOffsetT = 4;
  pub const VT_RECORDS: flatbuffers::VOffsetT = 6;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    SCM { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr, A: flatbuffers::Allocator + 'bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr, A>,
    args: &'args SCMArgs<'args>
  ) -> flatbuffers::WIPOffset<SCM<'bldr>> {
    let mut builder = SCMBuilder::new(_fbb);
    if let Some(x) = args.RECORDS { builder.add_RECORDS(x); }
    if let Some(x) = args.version { builder.add_version(x); }
    builder.finish()
  }

  pub fn unpack(&self) -> SCMT {
    let version = self.version().map(|x| {
      x.to_string()
    });
    let RECORDS = self.RECORDS().map(|x| {
      x.iter().map(|t| t.unpack()).collect()
    });
    SCMT {
      version,
      RECORDS,
    }
  }

  /// Version of Space Data Standards
  #[inline]
  pub fn version(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(SCM::VT_VERSION, None)}
  }
  /// Standards Dictionary
  #[inline]
  pub fn RECORDS(&self) -> Option<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<SCHEMA_STANDARD<'a>>>> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<SCHEMA_STANDARD>>>>(SCM::VT_RECORDS, None)}
  }
}

impl flatbuffers::Verifiable for SCM<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("version", Self::VT_VERSION, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, flatbuffers::ForwardsUOffset<SCHEMA_STANDARD>>>>("RECORDS", Self::VT_RECORDS, false)?
     .finish();
    Ok(())
  }
}
pub struct SCMArgs<'a> {
    pub version: Option<flatbuffers::WIPOffset<&'a str>>,
    pub RECORDS: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<SCHEMA_STANDARD<'a>>>>>,
}
impl<'a> Default for SCMArgs<'a> {
  #[inline]
  fn default() -> Self {
    SCMArgs {
      version: None,
      RECORDS: None,
    }
  }
}

pub struct SCMBuilder<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b, A: flatbuffers::Allocator + 'a> SCMBuilder<'a, 'b, A> {
  #[inline]
  pub fn add_version(&mut self, version: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(SCM::VT_VERSION, version);
  }
  #[inline]
  pub fn add_RECORDS(&mut self, RECORDS: flatbuffers::WIPOffset<flatbuffers::Vector<'b , flatbuffers::ForwardsUOffset<SCHEMA_STANDARD<'b >>>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(SCM::VT_RECORDS, RECORDS);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>) -> SCMBuilder<'a, 'b, A> {
    let start = _fbb.start_table();
    SCMBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<SCM<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for SCM<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("SCM");
      ds.field("version", &self.version());
      ds.field("RECORDS", &self.RECORDS());
      ds.finish()
  }
}
#[non_exhaustive]
#[derive(Debug, Clone, PartialEq)]
pub struct SCMT {
  pub version: Option<String>,
  pub RECORDS: Option<Vec<SCHEMA_STANDARDT>>,
}
impl Default for SCMT {
  fn default() -> Self {
    Self {
      version: None,
      RECORDS: None,
    }
  }
}
impl SCMT {
  pub fn pack<'b, A: flatbuffers::Allocator + 'b>(
    &self,
    _fbb: &mut flatbuffers::FlatBufferBuilder<'b, A>
  ) -> flatbuffers::WIPOffset<SCM<'b>> {
    let version = self.version.as_ref().map(|x|{
      _fbb.create_string(x)
    });
    let RECORDS = self.RECORDS.as_ref().map(|x|{
      let w: Vec<_> = x.iter().map(|t| t.pack(_fbb)).collect();_fbb.create_vector(&w)
    });
    SCM::create(_fbb, &SCMArgs{
      version,
      RECORDS,
    })
  }
}
#[inline]
/// Verifies that a buffer of bytes contains a `SCM`
/// and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_SCM_unchecked`.
pub fn root_as_SCM(buf: &[u8]) -> Result<SCM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root::<SCM>(buf)
}
#[inline]
/// Verifies that a buffer of bytes contains a size prefixed
/// `SCM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `size_prefixed_root_as_SCM_unchecked`.
pub fn size_prefixed_root_as_SCM(buf: &[u8]) -> Result<SCM, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root::<SCM>(buf)
}
#[inline]
/// Verifies, with the given options, that a buffer of bytes
/// contains a `SCM` and returns it.
/// Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_SCM_unchecked`.
pub fn root_as_SCM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<SCM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::root_with_opts::<SCM<'b>>(opts, buf)
}
#[inline]
/// Verifies, with the given verifier options, that a buffer of
/// bytes contains a size prefixed `SCM` and returns
/// it. Note that verification is still experimental and may not
/// catch every error, or be maximally performant. For the
/// previous, unchecked, behavior use
/// `root_as_SCM_unchecked`.
pub fn size_prefixed_root_as_SCM_with_opts<'b, 'o>(
  opts: &'o flatbuffers::VerifierOptions,
  buf: &'b [u8],
) -> Result<SCM<'b>, flatbuffers::InvalidFlatbuffer> {
  flatbuffers::size_prefixed_root_with_opts::<SCM<'b>>(opts, buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a SCM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid `SCM`.
pub unsafe fn root_as_SCM_unchecked(buf: &[u8]) -> SCM {
  flatbuffers::root_unchecked::<SCM>(buf)
}
#[inline]
/// Assumes, without verification, that a buffer of bytes contains a size prefixed SCM and returns it.
/// # Safety
/// Callers must trust the given bytes do indeed contain a valid size prefixed `SCM`.
pub unsafe fn size_prefixed_root_as_SCM_unchecked(buf: &[u8]) -> SCM {
  flatbuffers::size_prefixed_root_unchecked::<SCM>(buf)
}
pub const SCM_IDENTIFIER: &str = "$SCM";

#[inline]
pub fn SCM_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, SCM_IDENTIFIER, false)
}

#[inline]
pub fn SCM_size_prefixed_buffer_has_identifier(buf: &[u8]) -> bool {
  flatbuffers::buffer_has_identifier(buf, SCM_IDENTIFIER, true)
}

#[inline]
pub fn finish_SCM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(
    fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>,
    root: flatbuffers::WIPOffset<SCM<'a>>) {
  fbb.finish(root, Some(SCM_IDENTIFIER));
}

#[inline]
pub fn finish_size_prefixed_SCM_buffer<'a, 'b, A: flatbuffers::Allocator + 'a>(fbb: &'b mut flatbuffers::FlatBufferBuilder<'a, A>, root: flatbuffers::WIPOffset<SCM<'a>>) {
  fbb.finish_size_prefixed(root, Some(SCM_IDENTIFIER));
}
