export type EstadoEstudio = 'pendiente' | 'en curso' | 'completado';

export interface Tema {
  id: number;
  numero: number;
  titulo: string;
  contenido: string | null;
  estado_estudio: EstadoEstudio;
}

export interface BloqueTemario {
  id: number;
  nombre: string;
  orden: number;
  temas: Tema[];
}

export interface ResumenContenido {
  bloque_id: number;
  nombre: string;
  total_temas: number;
  temas_con_contenido: number;
  temas_pendientes: number;
  porcentaje: number;
}

export interface DetalleTema {
  id: number;
  numero: number;
  titulo: string;
  contenido: string | null;
  estado_estudio: EstadoEstudio;
  bloque: {
    id: number;
    nombre: string;
  };
}

export interface ActualizarEstadoTemaResponse {
  id: number;
  estado_estudio: EstadoEstudio;
}
