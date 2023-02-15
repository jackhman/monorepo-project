<template>
  <div class="map-box">
    <div id="aimap"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const aimap = window.aimap;
aimap.accessToken = "UFJGhyFdSzvm0ZbecYglp6CssgnDK7PZ";
aimap.baseApiUrl = "https://location-dev.newayz.com";

onMounted(() => {
  const map = new aimap.Map({
    container: "aimap",
    center: [121.51430022082093, 31.145185181529712],
    zoom: 11,
    minZoom: 3,
    maxZoom: 20,
    style: "aimap://styles/aimap/darkblue-v4",
    localIdeographFontFamily: "'Microsoft YaHei'"
  });

  const testData = [
    {
      source: "智能发现",
      item: "垃圾桶游街",
      pushTime: "2021-03-11T15:57:30",
      acceptDepart: "生态环境局",
      executeTime: "2021-03-11T15:57:30",
      executeDept: "三林镇",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.533620470658",
      latitude: "31.1525073762946",
      taskDesc: "垃圾桶游街",
      address: "浦三路-同汾泾",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/3/11/30_210311151549_959.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-03-12T14:48:18",
      du_limit: "",
      degreeName: "",
      createTime: "2021-03-11T15:57:30",
      taskId: "2103P0185729",
      taskNote:
        "中队队员赶到现场，该处情况已整改完毕，队员拍照取证，详见附件，申请结案"
    },
    {
      source: "智能发现",
      item: "机动车维修占道经营",
      pushTime: "2021-01-29T11:02:04",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T11:02:04",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.501396",
      latitude: "31.151268",
      taskDesc: "疑似占道经营",
      address: "上海市浦东新区三林镇杨南支路杨南新村小红楼八街坊",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129111150_727.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-29T20:16:29",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T11:02:04",
      taskId: "2101P0090734",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "机动车维修占道经营",
      pushTime: "2021-01-29T11:00:43",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T11:00:43",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.49639",
      latitude: "31.155435",
      taskDesc: "疑似占道经营",
      address: "上海市浦东新区三林镇灵岩南路日月新殿东区",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129110420_606.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-30T16:01:05",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T11:00:43",
      taskId: "2101P0090726",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "机动车维修占道经营",
      pushTime: "2021-01-29T11:00:13",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T11:00:13",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.496502",
      latitude: "31.154701",
      taskDesc: "疑似占道经营",
      address: "上海市浦东新区三林镇灵岩南路日月新殿西区",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129111100_865.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-30T16:01:05",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T11:00:13",
      taskId: "2101P0090723",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "未备案经营",
      pushTime: "2021-01-29T10:56:52",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T10:56:52",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.498104",
      latitude: "31.153031",
      taskDesc: "疑似未备案经营",
      address: "上海市浦东新区三林镇高青路上海市杨思高级中学(灵岩南路)",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129105650_402.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-31T09:45:37",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T10:56:52",
      taskId: "2101P0090703",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "机动车维修占道经营",
      pushTime: "2021-01-29T10:53:51",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T10:53:51",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.497283",
      latitude: "31.151897",
      taskDesc: "疑似占道经营",
      address: "上海市浦东新区三林镇灵岩南路源城·锦翠苑",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129111650_185.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-30T16:01:05",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T10:53:51",
      taskId: "2101P0090685",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "未备案经营",
      pushTime: "2021-01-29T10:53:21",
      acceptDepart: "建交委",
      executeTime: "2021-01-29T10:53:21",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.501396",
      latitude: "31.151268",
      taskDesc: "疑似未备案经营",
      address: "上海市浦东新区三林镇杨南支路杨南新村小红楼八街坊",
      frontImage:
        "http://10.242.181.21:84/MediaInfo/30/2021/1/29/30_210129110330_324.jpg",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-31T09:47:37",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-29T10:53:21",
      taskId: "2101P0090682",
      taskNote: "非清单内协同事项。"
    },
    {
      source: "智能发现",
      item: "车辆等评逾期",
      pushTime: "2021-01-18T14:03:41",
      acceptDepart: "建交委",
      executeTime: "2021-01-18T14:03:41",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.496346",
      latitude: "31.137666",
      taskDesc:
        "上海军鸿物流有限公司（许可证号:沪浦310115015474），运输车辆最近一次综合性能检测和技术等级评定检测日期为2019-05，等评有效期至2020-05，到期未按规定周期和频次进行车辆综合性能检测和技术等级评定。",
      address: "上海市浦东新区三林路235号22幢307室",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-19T16:31:51",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-18T14:03:41",
      taskId: "2101P0071122",
      taskNote: "推送要素不齐全，缺少要素：车牌号。"
    },
    {
      source: "智能发现",
      item: "车辆等评逾期",
      pushTime: "2021-01-18T13:55:33",
      acceptDepart: "建交委",
      executeTime: "2021-01-18T13:55:33",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.494833",
      latitude: "31.163199",
      taskDesc:
        "上海沪年物流有限公司（许可证号:沪浦310115005038），运输车辆最近一次综合性能检测和技术等级评定检测日期为2019-01，等评有效期至2020-01，到期未按规定周期和频次进行车辆综合性能检测和技术等级评定。",
      address: "浦东新区三林镇玉泉街57号2幢112室",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-19T16:23:51",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-18T13:55:33",
      taskId: "2101P0071073",
      taskNote: "推送要素不齐全，缺少要素：车牌号。"
    },
    {
      source: "智能发现",
      item: "车辆等评逾期",
      pushTime: "2021-01-18T13:46:35",
      acceptDepart: "建交委",
      executeTime: "2021-01-18T13:46:35",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.494833",
      latitude: "31.163199",
      taskDesc:
        "上海沪年物流有限公司（许可证号:沪浦310115005038），运输车辆最近一次综合性能检测和技术等级评定检测日期为2019-01，等评有效期至2020-01，到期未按规定周期和频次进行车辆综合性能检测和技术等级评定。",
      address: "浦东新区三林镇玉泉街57号2幢112室",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-19T16:21:51",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-18T13:46:35",
      taskId: "2101P0071019",
      taskNote: "推送要素不齐全，缺少要素：车牌号。"
    },
    {
      source: "智能发现",
      item: "车辆等评逾期",
      pushTime: "2021-01-18T13:45:15",
      acceptDepart: "建交委",
      executeTime: "2021-01-18T13:45:15",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.532996",
      latitude: "31.119336",
      taskDesc:
        "上海蒙克工贸有限公司（许可证号:沪浦310115004611），运输车辆最近一次综合性能检测和技术等级评定检测日期为2019-01，等评有效期至2020-01，到期未按规定周期和频次进行车辆综合性能检测和技术等级评定。",
      address: "三林镇天花庵村闵南队",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-19T16:07:50",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-18T13:45:15",
      taskId: "2101P0071011",
      taskNote: "推送要素不齐全，缺少要素：车牌号。"
    },
    {
      source: "智能发现",
      item: "房产中介未备案",
      pushTime: "2021-01-15T10:08:43",
      acceptDepart: "建交委",
      executeTime: "2021-01-15T10:08:43",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.495187",
      latitude: "31.158206",
      taskDesc: "疑似未备案中介",
      address:
        "上海市浦东新区三林镇灵岩南路灵丰农贸市场附近（121.495187,31.158206）",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-18T17:53:16",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-15T10:08:43",
      taskId: "2101P0063791",
      taskNote: "缺少推送要素，缺少图片"
    },
    {
      source: "智能发现",
      item: "房产中介未备案",
      pushTime: "2021-01-15T10:03:43",
      acceptDepart: "建交委",
      executeTime: "2021-01-15T10:03:43",
      executeDept: "城管执法局",
      statusName: "完成",
      disImage: "../image/NewStreet/CenterBottom/4.png",
      longitude: "121.501005",
      latitude: "31.152772",
      taskDesc: "疑似未备案中介",
      address: "上海市浦东新区三林镇杨南支路纯翠苑附近（121.501005,31.152772）",
      frontImage: "",
      laterImage: "",
      tudeType: "gaode",
      solvingTime: "2021-01-18T17:53:16",
      du_limit: "",
      degreeName: "",
      createTime: "2021-01-15T10:03:43",
      taskId: "2101P0063766",
      taskNote: "缺少推送要素，缺少图片。"
    }
  ];

  const clusterData = [];
  for (let index = 0; index < testData.length; index++) {
    const { longitude, latitude, ...others } = testData[index];
    clusterData.push({
      coordinates: [parseFloat(longitude), parseFloat(latitude)],
      ...others
    });
  }
  let instanceClusterLayer;
  map.on("load", () => {
    instanceClusterLayer = new aimap.ClusterLayer({
      map,
      data: clusterData,
      style: {
        "icon-image": "company-blue",
        "icon-size": 0.3,
        "icon-anchor": "bottom",
        "icon-allow-overlap": true,
        cluster: {
          // 聚合后点的配置样式
          "text-size": 12,
          "text-field": "{name}",
          "text-anchor": "top",
          "text-color": "#6EEEFC",
          "icon-image": "company-blue",
          "icon-allow-overlap": true,
          "icon-size": 0.3,
          "icon-anchor": "bottom"
        }
      },
      images: [
        {
          id: "company-blue",
          type: "png",
          url: "http://location-dev.newayz.com/aimap-gl-v2-example/demo/images/company-blue.png"
        }
      ],
      cluster: {
        type: "circle",
        maxZoom: 14, // 聚合的最大层级
        radius: 50 // 聚合的半径
      }
    });
    instanceClusterLayer.on("mouseenter", () => {
      console.log(123);
    });
  });
});
</script>

<script>
export default {
  name: "MapBox"
};
</script>

<style scoped lang="scss">
.map-box {
  width: 100vw;
  height: 100vh;
  background-color: #153345;
  #aimap {
    width: 100%;
    height: 100%;
    transform-origin: left top;
    transform: scaleX(0.6) scaleY(1.5);
  }
}
</style>
