// ... Declarações de módulos JSON

declare module "@/pages/logs/Contador.json" {
  const contador: ValoresContador;
  export default contador;
}

declare module "@/pages/logs/LogCache.json" {
  const LogCache: Message[];
  export default LogCache;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.bmp" {
  const value: string;
  export default value;
}
