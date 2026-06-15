declare namespace es3 {
  interface Options {
    remove?: Array<"defineProperty" | "freeze">;
    sourceMap?: boolean;
    sourcemap?: boolean;
  }

  interface BundleTransformResult {
    code: string;
    map: unknown;
  }

  interface Plugin {
    name: "es3";
    transformBundle(code: string): BundleTransformResult;
  }
}

declare function es3(options?: es3.Options): es3.Plugin;

export = es3;
