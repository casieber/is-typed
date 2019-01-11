interface Result {
  notFound: 'not-found';
  foundBundled: 'found-bundled';
  foundSeparate: 'found-separate';
}

type ResultValues = Result[keyof Result];

declare const result: Result;
declare function hasTypes(package: string): Promise<ResultValues>;

export { result, hasTypes };
