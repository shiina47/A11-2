import { memo } from 'react';

const Recipe = memo((props) => {
    console.log(props);
    return (
        <div style={{
            backgroundImage: `${props.image}`
        }}>
            <h3>{props.title}</h3>
            <img src={props.image} alt="recipeImage"/>
            <p>費用: {props.cost}円</p>
            <p>所要時間: {props.minutes}分</p>
            <p>分量: {props.amount}人分</p>
            <p>食材:</p>
            {props.material.map((mate) => (
                <p key={mate}>{mate}</p>
            ))}
            <p>作り方:</p>
            {props.process.map((proc) => (
                <p key={proc}>{proc}</p>
            ))}
        </div>
    );
});

export default Recipe;