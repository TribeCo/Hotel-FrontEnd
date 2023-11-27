import "./allroom.css";
import "./tailwind.css";
import filter from "../assets/filter.png";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";
import c from "../assets/3.jpg";
import d from "../assets/4.jpg";
import e from "../assets/5.jpg";
import f from "../assets/6.jpg";
import g from "../assets/7.jpg";

const cardData = [
	{
		imageUrl: a,
		description: "Description for Card 1",
	},
	{
		imageUrl: b,
		description: "Description for Card 2",
	},
	{
		imageUrl: c,
		description: "Description for Card 2",
	},
	{
		imageUrl: d,
		description: "Description for Card 2",
	},
	{
		imageUrl: e,
		description: "Description for Card 2",
	},
	{
		imageUrl: f,
		description: "Description for Card 2",
	},
	{
		imageUrl: g,
		description: "Description for Card 2",
	},
	{
		imageUrl: a,
		description: "Description for Card 2",
	},
	{
		imageUrl: c,
		description: "Description for Card 2",
	},
	{
		imageUrl: d,
		description: "Description for Card 2",
	},
	{
		imageUrl: b,
		description: "Description for Card 2",
	},
	// Add more objects for each card as needed
];
function AllRoom() {
	return (
		<div
			dir="ltr"
			id="mainc"
			className="bg-cover bg-center flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center relative">
				<p className="text mb-8">رزور اتاق</p>
				<div
					className="container border-8 rounded-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 b-5"
					id="cardContainer">
					{cardData.slice(0, 15).map((cardInfo, index) => (
						<div
							key={index}
							className=" rounded p-4 m-4 card">
							<img
								src={cardInfo.imageUrl}
								className="w-full h-32 object-cover mb-4"
								alt={`Image for Card ${index + 1}`}
							/>
							<div>
								<h5 className=" font-semibold mb-2 card-header-text">{` -- : ${
									index + 1
								} قیمت اتاق`}</h5>
								<p className=" card-text">توضیحات</p>
							</div>
						</div>
					))}
				</div>
				<button
					className="absolute top-20 right-4 -mt-3 -mr-3"
					id="filter">
					<img
						src={filter}
						alt="Circle Image"
						width="38px"
						height="38px"
						className="rounded-full item-bg"
					/>
				</button>
			</div>
		</div>
	);
}

export default AllRoom;
