
function Xiao2() {
    const comments = ["Thank you", "Amesome!", "I love it!", "10"];
    const commentsHTML = comments.map((com) => {
        return (<li>{com}</li>)
    });

    return (
        <ul className="comments">
            {commentsHTML}
        </ul>
    );
}

export default Xiao2;