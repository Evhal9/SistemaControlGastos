export interface User {
  id: number;
  nombre: string;
  password?: string;

}


export interface Income {
  descripcion: string;
  categoria: string;
  metodo: string;
  monto: number;
  userId: number;
}

export interface expense {
  descripcion: string;
  categoria: string;
  metodo: string;
  monto: number;
  userId: number;

}

