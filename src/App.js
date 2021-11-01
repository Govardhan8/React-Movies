import './App.css'

export default function App() {
	const movies = [
		{
			name: 'The incredible HULK',
			poster:
				'https://resizing.flixster.com/oyN95wAqUIPTGnv7Ebxw5vHClzE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176337_p_v10_ag.jpg',
			rating: '3.4',
			summary:
				'Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).',
		},
		{
			name: 'THOR: The dark world',
			poster:
				'https://resizing.flixster.com/I9KQHP0RgV4QKZEKqwJJCULORl8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9530219_p_v10_au.jpg',
			rating: '3.3',
			summary:
				'In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.',
		},
		{
			name: 'Iron man 2',
			poster:
				'https://resizing.flixster.com/51eTdcQ2qlJvhLNEdfJg_KVxVQc=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p3546118_p_v10_af.jpg',
			rating: '3.6',
			summary:
				'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
		},
		{
			name: 'Avengers : Age of ultron',
			poster:
				'https://resizing.flixster.com/vMZ7cy4KEElb2WqOa8e7sScosY4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10745606_p_v10_aq.jpg',
			rating: '3.8',
			summary:
				'When Tony Stark (Robert Downey Jr.) jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.',
		},
		{
			name: 'Thor',
			poster:
				'https://resizing.flixster.com/6bvH1-aBm562YEjx-nT_kkIkMJ0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p7989358_p_v10_af.jpg',
			rating: '3.9 ',
			summary:
				"As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
		},
		{
			name: 'Captain Marvel',
			poster:
				'https://resizing.flixster.com/qz6OB1ElBFbdf-be55wLhshJuFo=/fit-in/180x240/v2/https://resizing.flixster.com/ICRuM8e7gYTW-4BgzxD1Kj9mlMU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzU5ZjVjZTkzLTkwYjEtNDI5My04ZTY0LWMwNGMzM2M0MmYwOS53ZWJw',
			rating: '4',
			summary:
				'Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.',
		},
	]
	return (
		<section className='container'>
			<h1 className='header'>Avengers Movies</h1>
			<article className='app'>
				{movies.map(({ name, poster, rating, summary }) => (
					<Msg name={name} url={poster} rating={rating} summary={summary} />
				))}
			</article>
		</section>
	)
}

function Msg({ name, url, rating, summary }) {
	return (
		<div className='card'>
			<img className='image' src={url} alt={name} />
			<h1 className='title'>{name}</h1>
			<h2 className='rating'>Rated: ⭐{rating}</h2>
			<p className='summary'>{summary}</p>
		</div>
	)
}
