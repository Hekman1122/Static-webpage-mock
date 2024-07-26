import SeparateCard from "./SeparateCard";
import { nanoid } from "nanoid";
const CardData = [
  {
    title: "Commerce Cloud",
    left: true,
    subtitle: "一站式品牌電商營運管理",
    functionList: [
      "購物官網",
      "品牌 App",
      "金物流管理",
      "多元行銷促購",
      " 營運分析洞察",
      "跨境電商",
    ],
    wrap: true,
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marketing Cloud",
    left: false,
    subtitle: "數據驅動 會員關係升級",
    functionList: [
      "會員經營健康度指標",
      "數位媒體導流",
      "用戶分群和個人化行銷",
      "會員制度設定",
      " CRM 會員歷程管理",
    ],
    wrap: true,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661598442345-245ee74b57b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "OMO Cloud",
    subtitle: "虛實通路融合",
    left: true,
    functionList: [
      "門市會員經營",
      " 門市店員促購工具",
      "分店 OMO 執行統計",
      "跨通路績效管理",
    ],
    wrap: false,
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "OMNI",
    subtitle: "零售成長引擎",
    left: false,
    functionList: [
      "整合系統，打造零售數據中心",
      "驅動 Commerce Cloud，提升電商營運效率",
      " 驅動 Marketing Cloud，提升銷售轉換和顧客關係",
      " 驅動 OMO Cloud，提高門市銷售、優化顧客體驗",
      "擴充外部應用，滿足品牌轉型需求",
    ],
    wrap: false,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
  },
];
const Commercial = () => {
  return (
    <div className="w-full mt-16 max-w-5xl mx-auto">
      <h3 className="text-center text-3xl font-semibold">
        <p className="mb-2">D2C品牌商務解決方案</p>
        全方位支援品牌電商與OMO數位轉型
      </h3>
      <div className="mt-12">
        {CardData?.map((item) => {
          return <SeparateCard {...item} key={nanoid} />;
        })}
      </div>
    </div>
  );
};

export default Commercial;
