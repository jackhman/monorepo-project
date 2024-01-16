import "./index.scss"
import { List, Card, Image } from "antd"
const { Meta } = Card

const Document = () => {
  const documentList = [
    {
      url: "https://react.docschina.org/",
      img: new URL("@/assets/images/svg/React.svg", import.meta.url).href,
      title: "React"
    },
    {
      url: "https://ant-design.gitee.io/components/overview-cn/",
      img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "Ant Design"
    },
    {
      url: "https://blog.csdn.net/weixin_43972992?type=blog",
      img: "https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif",
      title: "CSND博客地址"
    },
    {
      url: "https://gitee.com/liuzhao2580",
      img: new URL("@/assets/images/svg/Gitee.svg", import.meta.url).href,
      title: "码云"
    },
    {
      url: "https://github.com/liuzhao2580",
      img: new URL("@/assets/images/svg/Github.svg", import.meta.url).href,
      title: "Github"
    }
  ]
  return (
    <List
      grid={{
        gutter: 10,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 4,
        xxl: 4
      }}
      dataSource={documentList}
      renderItem={item => (
        <List.Item>
          <Card
            style={{ cursor: "pointer", textAlign: "center" }}
            hoverable
            onClick={() => window.open(item.url)}
            cover={
              <Image
                preview={false}
                style={{
                  width: "200px",
                  height: "200px",
                  display: "inline-table",
                  marginTop: 20
                }}
                alt="example"
                src={item.img}
              />
            }
          >
            <Meta title={item.title} description={item.title} />
          </Card>
        </List.Item>
      )}
    ></List>
  )
}

export default Document
