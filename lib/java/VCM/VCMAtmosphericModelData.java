// automatically generated by the FlatBuffers compiler, do not modify

import com.google.flatbuffers.BaseVector;
import com.google.flatbuffers.BooleanVector;
import com.google.flatbuffers.ByteVector;
import com.google.flatbuffers.Constants;
import com.google.flatbuffers.DoubleVector;
import com.google.flatbuffers.FlatBufferBuilder;
import com.google.flatbuffers.FloatVector;
import com.google.flatbuffers.IntVector;
import com.google.flatbuffers.LongVector;
import com.google.flatbuffers.ShortVector;
import com.google.flatbuffers.StringVector;
import com.google.flatbuffers.Struct;
import com.google.flatbuffers.Table;
import com.google.flatbuffers.UnionVector;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

/**
 * VCM Atmospheric and Perturbation Model Data
 */
@SuppressWarnings("unused")
public final class VCMAtmosphericModelData extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_24_3_25(); }
  public static VCMAtmosphericModelData getRootAsVCMAtmosphericModelData(ByteBuffer _bb) { return getRootAsVCMAtmosphericModelData(_bb, new VCMAtmosphericModelData()); }
  public static VCMAtmosphericModelData getRootAsVCMAtmosphericModelData(ByteBuffer _bb, VCMAtmosphericModelData obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public VCMAtmosphericModelData __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public byte ATMOSPHERIC_MODEL() { int o = __offset(4); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte GEOPOTENTIAL_MODEL() { int o = __offset(6); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte LUNAR_SOLAR_PERTURBATION() { int o = __offset(8); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte LUNAR_PERTURBATION_MODEL() { int o = __offset(10); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte SOLAR_PERTURBATION_MODEL() { int o = __offset(12); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte SOLAR_RADIATION_PRESSURE() { int o = __offset(14); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte SRP_MODEL() { int o = __offset(16); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public byte RESONANCE_MODEL() { int o = __offset(18); return o != 0 ? bb.get(o + bb_pos) : 0; }

  public static int createVCMAtmosphericModelData(FlatBufferBuilder builder,
      byte ATMOSPHERIC_MODEL,
      byte GEOPOTENTIAL_MODEL,
      byte LUNAR_SOLAR_PERTURBATION,
      byte LUNAR_PERTURBATION_MODEL,
      byte SOLAR_PERTURBATION_MODEL,
      byte SOLAR_RADIATION_PRESSURE,
      byte SRP_MODEL,
      byte RESONANCE_MODEL) {
    builder.startTable(8);
    VCMAtmosphericModelData.addResonanceModel(builder, RESONANCE_MODEL);
    VCMAtmosphericModelData.addSrpModel(builder, SRP_MODEL);
    VCMAtmosphericModelData.addSolarRadiationPressure(builder, SOLAR_RADIATION_PRESSURE);
    VCMAtmosphericModelData.addSolarPerturbationModel(builder, SOLAR_PERTURBATION_MODEL);
    VCMAtmosphericModelData.addLunarPerturbationModel(builder, LUNAR_PERTURBATION_MODEL);
    VCMAtmosphericModelData.addLunarSolarPerturbation(builder, LUNAR_SOLAR_PERTURBATION);
    VCMAtmosphericModelData.addGeopotentialModel(builder, GEOPOTENTIAL_MODEL);
    VCMAtmosphericModelData.addAtmosphericModel(builder, ATMOSPHERIC_MODEL);
    return VCMAtmosphericModelData.endVCMAtmosphericModelData(builder);
  }

  public static void startVCMAtmosphericModelData(FlatBufferBuilder builder) { builder.startTable(8); }
  public static void addAtmosphericModel(FlatBufferBuilder builder, byte ATMOSPHERIC_MODEL) { builder.addByte(0, ATMOSPHERIC_MODEL, 0); }
  public static void addGeopotentialModel(FlatBufferBuilder builder, byte GEOPOTENTIAL_MODEL) { builder.addByte(1, GEOPOTENTIAL_MODEL, 0); }
  public static void addLunarSolarPerturbation(FlatBufferBuilder builder, byte LUNAR_SOLAR_PERTURBATION) { builder.addByte(2, LUNAR_SOLAR_PERTURBATION, 0); }
  public static void addLunarPerturbationModel(FlatBufferBuilder builder, byte LUNAR_PERTURBATION_MODEL) { builder.addByte(3, LUNAR_PERTURBATION_MODEL, 0); }
  public static void addSolarPerturbationModel(FlatBufferBuilder builder, byte SOLAR_PERTURBATION_MODEL) { builder.addByte(4, SOLAR_PERTURBATION_MODEL, 0); }
  public static void addSolarRadiationPressure(FlatBufferBuilder builder, byte SOLAR_RADIATION_PRESSURE) { builder.addByte(5, SOLAR_RADIATION_PRESSURE, 0); }
  public static void addSrpModel(FlatBufferBuilder builder, byte SRP_MODEL) { builder.addByte(6, SRP_MODEL, 0); }
  public static void addResonanceModel(FlatBufferBuilder builder, byte RESONANCE_MODEL) { builder.addByte(7, RESONANCE_MODEL, 0); }
  public static int endVCMAtmosphericModelData(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public VCMAtmosphericModelData get(int j) { return get(new VCMAtmosphericModelData(), j); }
    public VCMAtmosphericModelData get(VCMAtmosphericModelData obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
