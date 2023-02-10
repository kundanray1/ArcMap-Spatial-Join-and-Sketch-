export interface BridgeData {
  type: string;
  name: string;
  crs: Crs;
  features?: FeaturesEntity[] | null;
}
export interface Crs {
  type: string;
  properties: Properties;
}
export interface Properties {
  name: string;
}
export interface FeaturesEntity {
  type: string;
  properties: Properties1;
  geometry: GeometryI;
}
export interface Properties1 {
  status: string;
  globalid: string;
  CreationDa: string;
  Creator?: string | null;
  EditDate: string;
  Editor?: string | null;
  date_recor: string;
  recorded_b: string;
  cos_number?: null;
  bridge_nam: string;
  bridge_num?: string | null;
  grid?: string | null;
  bridge_typ: string;
  bridge_t_o?: null;
  is_this_br: string;
  additional?: string | null;
  would_you_: string;
  please_sel?: string | null;
  span_1?: string | null;
  span_2?: string | null;
  span_3?: string | null;
  span_4?: string | null;
  length_ft?: string | null;
  width_br_f?: string | null;
  nl?: string | null;
  ns?: string | null;
  ss_in?: string | null;
  nb?: string | null;
  sb_ft?: string | null;
  td_in?: string | null;
  b_in?: string | null;
  d_in?: string | null;
  tf_in?: string | null;
  tw_in?: string | null;
  bd_ft?: string | null;
  tc_ft?: null;
  df_ft?: null;
  r_ft?: string | null;
  lat?: null;
  long?: null;
}
export interface GeometryI {
  type: string;
  coordinates?: (number[] | null)[] | null;
}
