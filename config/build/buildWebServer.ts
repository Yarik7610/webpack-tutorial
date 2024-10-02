import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types/types"

export const buildWebServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port ?? 3000,
    open: true
  }
}
