function RowArticles() {
	const rowArticlesObj = [
		{
			id: "myStyle",
			header: "STYLE",
			li: [
				`I want to make things a little bit better wherever I go.`,
				`Casual: If you want, talk to me like I'm your friend and that 
			will be the case before long!`,
				`I enjoy seeing things from many different perspectives,
			whether through trying to search for new perspectives myself, or 
			hearing viewpoints from others.`,
			],
		},
		{
			id: "myValues",
			header: "VALUES",
			li: [
				`Reason and purpose: whether it comes from helping others 
			achieve their goals, or setting and achieving my own, it is 
			important to me that everything I do is building toward 
			something.`,
				`Helping others: I strongly believe in lifting others up 
			along with me; so, it is really important that, as I work to 
			better myself, I also offer support to those around me so 
			they can work to better themselves as well.`,
			],
		},
		{
			id: "myHelp",
			header: "HELP",
			li: [
				`I can sometimes be overwhelmed when I am faced with too 
			many obstacles at once. Helping me break down large problems into 
			smaller issues helps me face them more easily.`,
				`I sometimes struggle to reach out to others unless it 
			is necessary. Reach out, ask me how I am doing, and show you 
			care. I will appreciate it more than you know!`,
			],
		},
	];
	return (
		<section>
			{console.log("Object 1:", rowArticlesObj[0])}
			{rowArticlesObj.forEach((article) => {
				const articleId = article.id;
				console.log("ID:", articleId);
				const header = article.header;
				const liArray = article.li;
				return (
					<article id={articleId} className="sidewaysWrap bubble">
						<h2 className="article-header-sideways">{header}</h2>
						<ul>
							{liArray.map((item, index) => {
								console.log(index);
								return <li>{item}</li>;
							})}
						</ul>
						{console.log(header)};
					</article>
				);
			})}
		</section>
	);
}

export default RowArticles;
