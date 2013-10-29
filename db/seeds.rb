# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

spain = Place.create(name: 'Spain (Andalucia)')
Individual.create(place: spain, 
	name: 'Lourdes Nunez Müller', 
	title: 'Director of Knowledge Transfer at Granada Health Tech Park (PTS Granada)', 
	location: 'Granada, Spain', 
	description: 'Lourdes is responsible for creating a sucessful entrepreneurial ecosystem and establishing Granada Health Tech Park (PTS Granada) as a National Life Science Brand, fostering technology transfer/providing services for emerging companies and accessing to all the leading-edge technologies in the laboratories, promoting interdisciplinary research in biomedicine at an international level in order to make medical advances through the understanding, diagnosis, treatment, cure and prevention of illnesses and consolidating a health sciences business framework based on technology and aimed at clinical practice.', 
	bio: 'Lourdes Nunez Muller is the Director of Knowledge Transfer at the Granada Health Technology Park (PTS Granada).
She received an MBA from IESE Business School and her B.S., M.S. and Ph.D. in Pharmacy from the University of Granada. She published a book in 2010 titled “Clinical and Transactional Research, Through a Model” and has also published several scientific research and career development articles.
Previously, Lourdes worked at Sanitas as the Manager of E-Health Services and Home Healthcare Division in Madrid. She relocated to Boston in a strategic product development and business development role, which made her critically involved in bringing new medical technologies to market at CH-Werfen Group.
She was selected to work at the Dana-Farber Cancer Institute, one of the leading cancer research centers in the US. Dr. Muller worked there as a Biopharmaceutical Corporate Relations Liason, a new role funded by Novartis. She focused on early phase human clinical trials, tailoring a more productive clinical research portfolio strategy, sourcing innovations with biotech and pharmaceutical collaborators and improving operating efficiencies in the research program.
Since 2006, Dr. Nuñez Muller has worked in Spain as Director of Knowledge Transfer at PTS Granada. She is responsible for establishing PTS as a National Life Science Brand, fostering technology transfer/providing services for emerging companies, promoting interdisciplinary research in biomedicine at an international level in order to make medical advances through the understanding, diagnosis, treatment, cure and prevention of illnesses, and consolidating a health sciences business framework based on technology and aimed at clinical practice.
Lourdes is can be contacted at via email at Lnunez@ptsgranada.com')
Individual.create(place: spain,
	name: 'Ramón González Carvajal',
	title: 'Tenured Professor and Vice President of Technology Transfer',
	description: "Dr. Carvajal is the Vice President of Technology Transfer and runs the entrepreneurial activities at the University of Sevilla, one of Andalucia's major universities. He is also responsible for an entrepreneurial partnership with Málaga University and is an innovation-based entrepreneur himself.",
	location: 'Sevilla, Spain',
	bio: 'Ramón González Carvajal is a Professor of Electrical Engineering at the University of Seville. He received a BS, MS (1995) and PhD (1999) in Electrical Engineering from the University of Seville. At the University, he also serves as Vice-rector of Technology Transfer, General Manager of the Research Foundation and Coordinator of the Excellence TECH. He is the co-author of 10 patents, 5 of which are under contract with Seiko-Epson in Japan. He is also the co-founder of the company Adevice Solutions. Dr. Carvajal researches low voltage and low-power circuit design in nanometer scale technologies. He has published more than 300 academic papers and has participated in over 70 research projects funded by organizations including NASA, National Science Foundation, EPSRC, EUREKA the European Framework Program, and others. He has worked as a visiting professor at Texas A&M University, New Mexico State University, The Imperial College of Engineering and Medicine in London, and University of Catania.')
Individual.create(place: spain,
	name: 'Juan Carrasco',
	title: 'Co-founder of GPTech / Professor of Electronic Engineering',
	location: 'Andalucia, Spain',
	description: "Juan is the founder of a successful innovative technology-based start-up company. He is a full professor in one of Andalucía's major engineering schools and the user of the regional support system for entrepreneurship. He is also involved in ecosystem development initiatives.",
	bio: "Juan M. Carrasco is a Full Professor at Seville University in the Department of Electronic Engineering. He received a M.S. (1989) and Ph.D. (1992) in industrial engineering from Seville University, Spain. He is originally from San Roque, Spain. His work developing power converters has been integral to the development of renewable energy technologies in Spain. Professor Carrasco has many years of experience working in the power electronics field. He was involved in many industrial applications for the design and development of power converters applied to renewable energy technologies. 
Currently, he is researching Smart Grids. He is focused on the integration of renewable energy sources through these Smart Grids. In 2002, Juan founded a tech company called GPtech (Insert Hyperlink: www.greenpower.es). Juan currently serves as President of GPtech. GPtech is a tech company that specializes in renewable energies, efficiency and energy saving. Currently the company's turnover is over $35M and its products are sold in North America, South America, Europe and Asia.")
Individual.create(place: spain,
	name: 'Javier Gutierrez Rumbao',
	title: 'Innovation and Entrepreneurship Advisor',
	location: 'Andalucia, Spain',
	description: "Javier is the MIT REAP Andalucia team champion. He is an adviser to the government and other stakeholders for innovation and entrepreneurship and is involved in ecosystem development initiatives.",
	bio: "entrepreneurship consultant. He was previously the Director of Technology Analysis for the Regional Ministry of Economy, Innovation and Science for the government of Andulucia. He received a degree in industrial engineering from the University of Seville. He served as a management consultant for 8 years and has experience in multiple business industries. For the past two years, he built a new ICT engineering start-up. His current areas of interest include innovation, entrepreneurship and regional development.")
Individual.create(place:spain,
	name: 'Ángel Ortiz Sánchez',
	title: 'Director-General for Telecommunications and Information Society Policy',
	location: 'Seville, Spain',
	description: "Ángel is the Director-General of Information Society Policy at the Regional Ministry of Economy, Innovation, Science and Employment, a ministry that is key to the acceleration of Andalucia's entrepreneurial ecosystem (responsible for economy, regional development, science, universities, industry, energy, technology, innovation, entrepreneurship, etc.)",
	bio: "Ángel Ortiz Sánchez (Almería, 1976) holds a degree in Economics and Business Administration from the University of Almería and MBA from Florida International University (USA). He is Director-General for Telecommunication and Information Society in the Regional Ministry of Economy, Innovation, Science and Employment of the Government of Andalucía. Previously, he held the positions of Director of Quality in the Services for Employment in the former Regional Ministry of Employment; Coordinator of the Office of Reimbursable Support Funds for Andalucía; and Responsible of the Support Fund for the Internationalization of Andalucía's Economy, in the Trade Promotion Agency of Andalusia (Extenda). In the private sector, Ortiz Sánchez was Director of Operations in Íbero Credit and corporate credit analyst in Cristal Credit International LLC, both in Miami (USA).")
Individual.create(place:spain,
	name: 'Ignacio Ochoa Mendoza',
	title: 'Director of Government and Businesses for the Southern Region',
	location: 'Seville, Spain',
	description: "Ignacio represents Telefónica de España, Spain's leading multinational telecom services provider which sponsors the participation of Andalucía in MIT REAP and is a key player in the entrepreneurial ecosystem of Andalucia and greater Spain. The company promotes entrepreneurship through its Wayra Accelerator and its own VC fund.",
	bio: "Ignacio is a telecommunications engineer who graduated from the Economics / Business Administration department. He is currently Director of Government and Businesses for the South Region at Telefónica España. He has previous experience in the telecommunications industry in the US, South America and the UK.")

finland = Place.create(name: 'Finland')
Individual.create(place:finland,
	name: 'Pirjo Kutinlahti',
	title: 'Ministry of Employment and the Economy',
	location: 'Helsinki, Finland',
	description: 'Regional Policy Design and Coordination Promoting Regional Innovation Systems',
	bio: " ")
Individual.create(place:finland,
	name: 'Veli-Pekka T Heikkinen',
	title: ' ',
	location: 'Helsinki, Finland',
	description: " ",
	bio: " ")
Individual.create(place:finland,
	name: 'Lauri Lehtovuori',
	title: 'Manager, Markets at PwC',
	location: 'Helsinki, Finland',
	description: " ",
	bio: "Lauri joined the Finnish REAP team representing Aaltoes (Aalto Entrepreneurship Society), a student-run organization that was kicked-off in 2010 by students of Aalto University. Aaltoes is driving a positive cultural change in Finland so that academic students and researcher alike would start new businesses and write their own growth stories. The vision of the society is to turn Finland and the nearby area (Moscow, St. Petersburg, the Baltics and Stockholm) into one of the next entrepreneurship hubs by 2025. According to Lauri there is still a long way go but there is a simple formula that helps in reaching that goal: determination, hard work, the help of experienced entrepreneurs and not being afraid of trying out new things. Currently Lauri works with the most promising Finnish startup and growth companies at PricewaterhouseCoopers (PwC) Finland. The Economist (2013): 'IN 2010 A GROUP of students at Aalto University, just outside Helsinki, embarked on the most constructive piece of student activism in the history of the genre. They had been converted to the power of entrepreneurialism during a visit to the Massachusetts Institute of Technology.'")
Individual.create(place:finland,
	name: 'Päivi Fadjukoff',
	title: 'Head of Planning & Development at the Agora Center, University of Jyväskylä',
	location: 'Jyväskylä, Finland',
	description: "The primary motivation underpinning our successful teams and projects has been the benefits of research for society. This requires both close collaboration with entrepreneurs, and fostering of academic entrepreneurship. I am supporting the researchers toward this direction.",
	bio: "Head of planning & development of the Agora Center, University of Jyväskylä. The AC is an institute for ambitious co-creation in the area of interdisciplinary human technology + human centric solutions research and development. The Agora Center creatively combines research of high international standard, in a range of scientific disciplines, with the expertise derived from its diverse partner network. The Center is grounded in a shared vision of developing the future knowledge society from a human-centric point of view.")

china = Place.create(name: 'China (Hangzhou)')
Individual.create(place:china,
	name: 'Jiang Wei',
	title: '',
	location: 'Hangzhou, China',
	description: "",
	bio: "")
Individual.create(place:china,
	name: 'Jennifer Cheung',
	title: 'Huadan Inc',
	location: 'Hangzhou, China',
	description: "",
	bio: "")

newzealand = Place.create(name: 'New Zealand')
Individual.create(place:newzealand,
	name: 'Erin Wansbrough',
	title: 'Regional Manager, Callaghan Innovation',
	location: 'Auckland, New Zealand',
	description: "Government investment in the innovation eco-system and Business R&D. Commercialization funding. Entrepreneurship program development.",
	bio: "")
Individual.create(place:newzealand,
	name: 'Phil Love',
	title: 'General Manager, BusinessNZ',
	location: 'Wellington, New Zealand',
	description: "I encourage entrepreneurship through advocacy and policy development and also through connecting various businesses and organisations through our various networks.",
	bio: "Managing the Major Companies Group which is the top 100 companies, business development and retention and commercial partnerships")
Individual.create(place:newzealand,
	name: "Brett O'Riley",
	title: 'CEO, Auckland Tourism, Events and Economic Development',
	location: 'Auckland, New Zealand',
	description: "Regional Economic Development, Tourism, Major Events, Business Attraction and Investment",
	bio: "Brett has worked on a wide range of start-up projects in the ICT industry, both in New Zealand and overseas. He has held senior management positions for over 20 years in the private and public sectors. Recently, he served as Deputy Chief Executive, Business Innovation and Investments for the New Zealand Ministry of Science + Innovation and as the founding CEO of the NZICT Group. The NZICT Group is made up of New Zealand’s leading ICT companies Currently, Brett serves as Vice Chairman of the Pacific Telecommunications Council, Advisory Council, and Chairman of the Network of Aotearoa Computer Clubhouses. He is also a member of the Board of Trustees of the Manaiakalani Education Trust.")
Individual.create(place:newzealand,
	name: 'Peter Rose',
	title: 'New Project Director',
	location: 'Christchurch, New Zealand',
	description: "Business NZ industry lobby group Innovative Energy Company Experienced Entrepreneur",
	bio: "Peter Rose has an MBA from Cranfield School of Management (UK), he trained as a Chartered Accountant with KPMG and Citibank and is a member of the IOD. Peter’s first fully fledged start-up was Hotech Edge Ltd, an IT company that he ran for 5 years, the business started in NZ before entering Australia, Thailand, the US and the UK, Hotech is now based out of the UK. He then moved into Private Equity and Venture Capital managing a portfolio of companies (startup’s through to mature businesses) for high net worth individuals before returning to the Corporate World at PGG Wrightson (Head of Strategy and Business Development) and more latterly with Ngāi Tahu Property as GM Strategy and Business Development. Ngāi Tahu are the Māori people of the southern islands of New Zealand. Ngāi Tahu have commercial interests that total almost a billion dollars in assets. Peter sits on the Board of the NZ Merino Company and Flow Software, a business that he invested in when it had just one FTE, today Flow Software has offices in NZ and Australia with 25 FTE’s.")
Individual.create(place:newzealand,
	name: 'David Beard',
	title: 'Partner, MOVAC',
	location: 'Wellington, New Zealand',
	description: "MOVAC encourages and support a number of entrepeneural endevours by working with NZ angel association, angel groups and incubators to enhance and develop the venture capital eco-system",
	bio: "David is a General Partner with venture capital firm MOVAC, based in Wellington, New Zealand (www.movac.co.nz). Since joining MOVAC in early 2006, David has been a partner in both of its funds. Fund 2 was a $15m start-up angel fund and the current fund, Fund 3, a $42m early expansion fund. Over the last 6 years David has reviewed over 500 businesses and taken eight through to investment, including negotiation, legals and due diligence. David is currently a director of three of MOVAC’s ventures including PowerbyProxi, Kiwi Semiconductor, Migco Pharmaceuticals. Prior to joining MOVAC, David was an entrepreneur and spent 5 years setting up and running his own web based SaaS businesses with offices in New Zealand and the UK. David's earlier career was as a management consultant for Deloitte and IT program director for multi-million dollar corporate projects.")
Individual.create(place:newzealand,
	name: 'Ian Town',
	title: 'Professor, University of Canterbury',
	location: 'Christchurch, New Zealand',
	description: "Currently establishing a Student Innovation Centre at the University based on experience and observations from the Boston visit in February",
	bio: "As Deputy Vice-Chancellor at the University of Canterbury Ian Town brings a wealth of experience to the New Zealand tertiary education sector. Ian has held a range of portfolios at the University of Canterbury and is currently leading the project team engaged with Government in developing the University’s strategic direction in earthquake recovery. Throughout his time he has retained a major interest in research strategy, including leading the University’s strategic projects around the Performance Based Research Fund, research and innovation, links with commercial companies and led the establishment of Research Institutes. He initiated a number of relationships that form the basis of New Zealand ICT Innovation Institute (NZi3) including the partnership with IBM that lead to the establishment of the BlueFernTM supercomputer unit. He was trained in Medicine at the University of Otago was appointed as the Dean of the Christchurch School of Medicine & Health Sciences, the position he held until his appointment at the University of Canterbury in 2005. His research career centred on clinical and applied research into respiratory disorders, mainly asthma, COPD, and pneumonia. He was the Director of the Canterbury Respiratory Research Group for twelve years, and has published more than 100 articles on a wide variety of respiratory conditions.")
Individual.create(place:newzealand,
	name: 'Mitch Olson',
	title: 'Digital Sector Entrepreneur',
	location: 'Auckland, New Zealand',
	description: "I encourage entrepreneurship in New Zealand through a number of initiatives. Three of my key initiatives are Born Global, the Auckland Digital Accelerator and Gamedojo. I am the Co-founder of Born Global, a project to build a social network for New Zealand's innovation ecosystem. I am also Co-founder of a project to develop Auckland's first Digital Accelerator. I am Founder of Gamedojo - an organization that helps build the profile and capacity of the gaming industry in New Zealand. I am also a mentor at the Auckland University Business School.",
	bio: "Mitch Olson is Co-founder of SmallWorlds, New Zealand’s largest social gaming company with over 10 million registered players. SmallWorlds is a next generation social game & 3D virtual environment blending rich visuals, social interplay, and a healthy dose of imagination into an immersive and engaging experience. Members shape the world, selecting from thousands of items to create unique spaces. Whether nurturing exotic plants in gardens, crafting rare items or enjoying the companionship of friends in popular hang-out spots, there are a wide variety of enjoyable activities to suit any mood. Opportunities for adventure are endless, as citizens play the starring role in elaborate movie-like missions – or play the director by creating their own interactive narrative for others to enjoy.")



Place.create([{name: 'Scotland'}, {name: 'Turkey (Istanbul)'}, {name: 'Mexico (Veracruz)'}])
