import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`emotionItem ${isSelected ? `emotionItem_on_${emotionId}` : ''}`}>
      <img className="emotion_img" src={getEmotionImage(emotionId)} alt="" />
      <span className="emotion_name">{emotionName}</span>
    </div>
  )
}

export default EmotionItem;