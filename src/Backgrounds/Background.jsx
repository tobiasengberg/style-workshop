import "./Backgrounds.css";

const Background = () => {

    const bg = [...Array(15).keys()];
    return (
        <div className="background">
            {bg.map((item) => (
                <div key={item} id={`bg-${item}`}></div>
            ))}

        </div>
    );
};

export default Background;