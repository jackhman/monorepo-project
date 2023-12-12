const autoRequiredModule = {}

function importAll(r) {
  r.keys().forEach((key:string) => {
    const getKey = key.split('/')[1]
    autoRequiredModule[getKey] = r(key).default
  })
}
// @ts-ignore
// 可以获取当前指定文件夹下面的文件,第二个参数设置为true,代表递归寻找
importAll(require.context('./modules', true, /reducers\.ts$/))

const store = {}

export default store
