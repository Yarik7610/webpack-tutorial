import path from "path"
import webpack from "webpack"
import { buildWebpack } from "./config/build/buildWebpack"
import { BuildPaths, Mode } from "./config/build/types/types"

interface EnvVariables {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html")
  }

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3000,
    paths
  })
  return config
}
