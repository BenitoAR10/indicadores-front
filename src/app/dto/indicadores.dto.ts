export interface IndicadoresDto {
  id_indicador: number;
  area: string;
  descripcion: string;
  riesgo: string;
  periodicidad: string;
  formula: string;
  unidad_medida: string;
  valor: number;
  limite_alerta: number;
  umbral_verde: number;
  umbral_amarillo_min: number;
  umbral_amarillo_max: number;
  umbral_rojo: number;
}
