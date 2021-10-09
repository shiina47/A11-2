import { memo } from 'react';


const Recipe = memo((props) => {
    const {title, image, cost, minutes, amount, material, process, onClick} = props;
    console.log(material);
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt="recipeImage"/>
            <p>費用: {cost}円</p>
            <p>所要時間: {minutes}分</p>
            <p>分量: {amount}人分</p>
            <p>食材:</p>
            {/* {material.map((mate, index) => {
                return (
                    <div key={index}>
                        <p>{mate}</p>
                    </div>
                );
            })} */}
            <p>作り方:</p>
            {/* {processes.map((proc) => (
                <p key={proc}>{proc}</p>
            ))} */}
            <button onClick={onClick}>次へ</button>
        </div>
    );
});

export default Recipe;