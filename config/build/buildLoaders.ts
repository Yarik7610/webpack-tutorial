import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { ModuleOptions } from "webpack"
import { BuildOptions } from "./types/types"

export const buildLoaders = (options: BuildOptions): ModuleOptions["rules"] => {
  const isDev = options.mode === "development"

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node-modules/
  }

  return [sassLoader, tsLoader]
}
