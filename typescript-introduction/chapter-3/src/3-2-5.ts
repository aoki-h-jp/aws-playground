// 任意のプロパティ名を許容する型について
type PriceData = {
    [key: string]: number;
}

const data2: PriceData = {
    apple: 220,
    coffee: 120,
    bento: 500
};

// 型安全性が破壊されるので注意する（なるべく使わない方がいい）
// data.bento2は定義されていないのでundefined
// bento2というnumber型ではない要素が入ってしまう
const bento2: number = data2.bento2;
// undefined
console.log(bento2);