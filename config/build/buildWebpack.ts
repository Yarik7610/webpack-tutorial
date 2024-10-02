import webpack from "webpack"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildWebServer } from "./buildWebServer"
import { BuildOptions } from "./types/types"

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options
  const isDev = mode === "development"

  return {
    devServer: isDev && buildWebServer(options),
    devtool: isDev && "inline-source-map",
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options)
  }
}
