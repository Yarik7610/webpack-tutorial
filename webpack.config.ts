import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import webpack from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

type Mode = "production" | "development"
interface EnvVariables {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development" ? true : false

  const devServer: DevServerConfiguration = {
    port: env.port ?? 3000,
    open: true
  }

  const config: webpack.Configuration = {
    devServer: isDev && devServer,
    devtool: isDev && "inline-source-map",
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js", //name == entry (по дефолту main, иначе свое название)
      clean: true
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") })],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node-modules/
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    }
  }
  return config
}
