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

scotland = Place.create(name: 'Scotland')
Individual.create(place:scotland,
	name: 'Donna Chisholm',
	title: 'Head of Business Innovation and Growth Sectors',
	location: 'Inverness, United Kingdom',
	description: 'Operating at a strategic level for HIE across the Highlands and Islands of Scotland. Work areas include overseeing the continual growth of our key business sectors, development of programmes in innovation (including entrepreneurship), leadership and management, international trade and business mentoring, all designed to accelerate business growth. Programmes for young people focus on STEM and on graduate employment.',
	bio: 'Donna Chisholm has an instrumental role in fostering innovation and entrepreneurship in Scotland. She is the Head of Business Innovation and Growth Sectors, Highlands & Islands Enterprise, operating at a strategic level across Highlands and Islands of Scotland. Her work areas include overseeing the continual growth of key business sectors, development of programs in innovation and entrepreneurship, leadership and management, international trade and business mentoring, all designed to accelerate business growth. Before joining Highlands and Islands Enterprise, Donna was Project Manager for the redevelopment of Eden Court in Inverness, delivering a £23 million arts center from inception to completion. Prior to this, Donna worked for East Ayrshire Council as a Service Head. She also worked on programs for young people focusing on science, technology, engineering, and mathematics and on graduate employment.')
Individual.create(place:scotland,
	name: 'Jonathan Harris',
	title: 'Editor, Young Company Finance',
	location: 'Edinburgh, United Kingdom',
	description: 'Publishing and editing Young Company Finance (YCF), a monthly review of early stage high growth companies in Scotland, which focuses particularly on the issues of how to fund growth.',
	bio: "Jonathan Harris is passionate about entrepreneurial financing for growth. He is the publisher and editor of Young Company Finance (YCF), a monthly review of early stage high growth companies in Scotland, which focuses particularly on the issues of how to fund growth. He acquired YCF from its founder in November 2000. Jonathan has subsequently expanded the business to encompass special reports on specific market sectors (to date Life Sciences, Digital Entertainment, and Renewable Energy), a very successful annual conference now in its eleventhyear, and in 2006 a new edition of YCF tracking young companies in the North of England (but recently discontinued). In 2010 Jonathan started a new project, Spinouts UK, which has created an online database of all spinouts from universities across the UK, which is regularly updated as the basis of a Quarterly Journal and Annual Report.  Jonathan comes from an impressive industrial background. For 15 years, he was a director and general manager at the international drilling company, Atlantic Drilling Company Ltd and served as chairman of the International Association of Drilling Contractors' North Sea chapter, and on the Industry Advisory Board appointed by the then Minister for Energy.
Jonathan is a director of LNC Scotland, the national business angel association.")
Individual.create(place:scotland,
	name: 'Ian Ritchie',
	title: 'Chairman, Iomart',
	location: 'Lasswade , Midlothian, United Kingdom',
	description: 'Ian is the chairman of iomart, which is the leading UK owned data hosting and butt services company, with data centers throughout the UK.',
	bio: 'Ian Ritchie is a serial entrepreneur in the IT sector. He is the Chairman of several software companies, such as iomart plc. (AIM:IOM), Computer Application Services Ltd., the Interactive Design Institute, Blipfoto, Cogbooks, Musemantik and RedFox Media. He is also Chairman of Our Dynamic Earth, the Edinburgh Science Center. In addition to his enterprises, he has been actively leading several professional networks such as the Edinburgh International Science Festival, ScotlandIS and Royal Academy of Engineering. Ritchie has also been active in venture capital as a director of Northern Venture Trust plc from 1997-2001 and as a member of the advisory board of Pentech Ventures from 2001. He is a member of the ‘Access to Finance’ expert group (A2FG) at the UK’s Department for Business Innovation and Skills.')
Individual.create(place:scotland,
	name: 'Clive Reeves',
	title: 'Executive at Scottish Enterprise',
	location: 'Edinburgh, United Kingdom',
	description: '',
	bio: '')
Individual.create(place:scotland,
	name: 'Jonathan Levie',
	title: 'Professor of Entrepreneurship, University of Strathclyde',
	location: 'Edinburgh, United Kingdom',
	description: 'Jonathan has extensive direct experience of entrepreneurship, and served for six years on the board of a community enterprise company which raised £5 million in public funds. He is a principal of Enable Ventures, Inc., a US-based entrepreneurial coaching company that developed the Supercoach® entrepreneurial coaching method. He is visiting faculty at Audencia Nantes Ecole de Management. He is a reviewer for Small Business Economics, Journal of Business Venturing, Entrepreneurship Theory and Practice, Academy of Management Learning and Education, International Small Business Journal, Venture Capital, Academy of Management Conference (Entrepreneurship Division), and the Babson Entrepreneurship Research Conference, among others.',
	bio: 'From 2000 to 2005 Jonathan was Director of the Hunter Centre for Entrepreneurship at Strathclyde. He directs the UK Global Entrepreneurship Monitor programme and also leads the Scottish GEM team.
Before joining the University of Strathclyde in 1999 to create a new postgraduate programme in Technology Entrepreneurship, he was Research Fellow at the Foundation for Entrepreneurial Management at London Business School, where he was also Associate Co-ordinator of the Global Entrepreneurship Monitor, a major international research project led by London Business School and Babson College. In 1997 he was Visiting Research Fellow and Part-time Lecturer in Management at Babson College, Wellesley, MA. He was formerly EC Research Fellow at INSEAD, France, and College Lecturer in the Department of Management at University College, Cork. He holds a Ph.D. from the University of London (London Business School) and a B.Sc. (Natural Sciences) and M.Sc (Management) from the National University of Ireland. Jonathan has been researching and teaching entrepreneurship since 1982. His main research interests are comparative entrepreneurial strategies, the evolution of young firms, the environment for entrepreneurship, and the nature of interaction between entrepreneurs and resource providers. His papers have been accepted for publication in Entrepreneurship Theory & Practice, Research Policy, Small Business Economics, Family Business Review, Journal of Economic Issues, and Frontiers of Entrepreneurship Research, among others.')
Individual.create(place:scotland,
	name: 'Simon Grey',
	title: 'Chief Executive, AWS Ocean Energy Ltd',
	location: 'Edinburgh, United Kingdom',
	description: 'The AWS management team has extensive experience of offshore engineering and renewable energy projects both in the UK and overseas. Headed by Chief Executive Simon Grey, the teams are based in Inverness and supported by a small number of firms who provide specialist services such as legal and financial advice, engineering consultancy and PR & communications.',
	bio: 'Simon is a chartered engineer with 28 years experience of power generation projects and business management of which 22 years have been in the renewables sector. He is responsible for the day-to-day running of the company.')

istanbul = Place.create(name: 'Turkey (Istanbul)')
Individual.create(place:istanbul,
	name: 'Dilek Cetindamar',
	title: 'Professor',
	location: 'Istanbul, Turkey',
	description: "(1) Teaching: 1999- Courses on Entrepreneurship, Technology Management, Social Innovation, Sabanci University 2003- Academic director, Entrepreneurship Development Program, Sabancı University. (2) Dissemination: * Organization of various Conferences and Seminars at Sabanci University * Giving presentations at various national conferences/seminars * Publishing articles at several business outlet & newspapers * Educating PhD students (3) Memberships: 2006- ERENET (Entrepreneurship Research and Education Network of Central European Universities) 2005- European Institute for Technology and Innovation Management 2003- Entrepreneurship Working Group, TÜSİAD (Association of Turkish Industrialists&Businessmen) (4) Judge: 2010- Judge in the Semi-final round of Challenge: Future Competition 2009-2010 (www.challengefuture.org) 2012- Judge for the The Hong Kong Polytechnic University’s Global Student Challenge (http://www.polyu.edu.hk/polyuchallenge/index2.php) (5) Research & Publications: Many research projects and several publications on entrepreneurship (See details at the web site)",
	bio: "She received her B. S. degree from Industrial Engineering Department at Boğaziçi University, her M.A degree from Economics Department at BU, and her Ph.D. degree from Management Department at Istanbul Technical University in 1995. Before her appointment to the Faculty of Management at Sabanci University in 1999, she worked at: Boğaziçi University, Case Western Reserve University (USA), Portland State University (USA), and Chalmers University of Technology (Sweden). She was at Cambridge University, UK as a visiting professor in 2008. She participated in many international projects, including UN and EU projects. She has more than 50 publications, including 8 books. She received an 'encouragement award' from Turkish Academy of Sciences in 2003.")
Individual.create(place:istanbul,
	name: 'Berna Samiloglu Acar',
	title: 'Director - New Businesses & Entrepreneurship - Turkcell',
	location: 'Istanbul, Turkey',
	description: "",
	bio: "")
Individual.create(place:istanbul,
	name: 'Ihsan Elgin',
	title: 'Director, Fit Startup Factory (tech business accelerator)',
	location: 'Istanbul, Turkey',
	description: "Founder, Accelerator Director, Instructor, Angel Investor",
	bio: "After graduating from Dokuz Eylül University with a degree in Economics, Elgin took on several corporate entrepreneurial roles in a variety of companies for 8 years. While pursuing his career, he graduated from Koç University’s Executive MBA Program. After that he joined the executive team of Kodalfa, Inc., a newly formed Turkish start-up company. Kodalfa was recognized as one of the seven most high impact entrepreneurial companies in Turkey by Endeavor in 2008 and started to operate in the United States under the Climate Minder Group, where Elgin was a co-founder. They sold Climate Minder to one of the biggest irrigation company in the US at the end of 2012. İhsan Elgin is currently Executive Director of the Center for Entrepreneurship at Özyegin University to design and manage a Venture Accelerator -Fit Startup Factory- for techno startups to commercialize innovative ideas. Elgin gives the lectures of “Access to Capital” , “Business Model Generation” and consults corporates about innovation management and entrepreneurship. Ihsan Elgin also invests in seed stage startups as an Angel Investor.")
Individual.create(place:istanbul,
	name: 'Ussal Sahbaz',
	title: 'Private Sector Development Specialist',
	location: 'Ankara, Turkey',
	description: "",
	bio: "")
Individual.create(place:istanbul,
	name: 'Alaaddin Alpay',
	title: 'Developer Community Manager, Partners & Alliances Department at Turkcell',
	location: 'Istanbul, Turkey',
	description: "Alaaddin is building an evangelist network to connect developers ranging from university programming students and freelance developers to software development houses and corporate IT professionals. He works within this community to create partnerships with Turkcell in developing new products, services, and applications. He also empowers these communities using Turkcell’s assets such as customer databases, marketing and communication channels, marketing and technology know-how, innovation network, and so on.",
	bio: "Alaaddin received a BS from Istanbul's Yildiz Technical University in mechanical engineering with a focus in automotive engineering. He later earned his MBA with a focus in management and marketing from the State University of West Georgia in Carrollton, Georgia. Alaaddin joined the team at Turkcell, the leading mobile phone operator in Turkey, over 12 years ago, and has worked in a number of different roles:
• Strategic Business Development Expert for the CEO Office: Mid to long-term business development and investment focus.
• Product Strategy Expert for the Marketing Department: Short to mid-term strategic product and service development.
• Business Development Expert for the Value Added Services Department: New/Innovative product and service development and launch
• Head of Emerging Partner Services Development for the Partnering Department: New product and services in emerging areas from partner ecosystem
• Head of Innovation Governance for the Partnering Department: Internal and external product and service development process management, building an innovation network for company, organizing and running business plan and innovation competitions, strategic partner ecosystem management (universities, technopolis, NGOs, public institutions)
• Head of Entrepreneurship for the New Business Development Department: Utilization of external community power for development of new product and services, community building and management, organizing entrepreneurship focused events, seminars, strategic partner ecosystem management (universities, technopolis, NGOs, public institutions, investor community ranging from angels, angel groups to VCs)
• Head of Developer Community Management for the Partners & Alliances Department (current): Building an evangelist network to connect developers ranging from university programming students and freelance developers to software development houses and corporate IT professionals. Encouraging these communities to partner with Turkcell to develop new products, services, and applications. Empowering these communities usingTurkcell’s assets such as customer databases, marketing and communication channels, marketing and technology know-how, innovation network, and so on.")
Individual.create(place:istanbul,
	name: 'Ahmet Murat Fiş',
	title: 'Assistant Professor of Entrepreneurship at Ozyegin University',
	location: 'Istanbul, Turkey',
	description: "Teaching and research in entrepreneurship.",
	bio: "Dr. Ahmet Murat Fiş got his BA degree in Bogazici University, Istanbul, Turkey and MBA degree in Oklahoma State University, Stillwater, USA. After his MBA, he worked for industry with various responsibilities in various departments such as the Office of the President, Human Resources, Quality, and Information Systems. After seven years of industry experience in which he also attended a two year Management Trainee Program, he began the PhD Program at Sabanci University, Istanbul, Turkey. He got his PhD degree in January, 2009. Besides some teaching experience as a research assistant, he has presented several papers and posters in various local and international conferences. His research interests focus on corporate entrepreneurship, entrepreneurship, and TQM in general. He also serves as assessor/chief assessor for Kalder in the Turkish National Quality Award since 1999.")

mexico = Place.create(name: 'Mexico (Veracruz)')
Individual.create(place:mexico,
	name: 'Abraham C. Rodriguez Garcia',
	title: 'Managing Director of Technology Innovation – State Government of Veracruz',
	location: 'Xalapa , Veracruz, Mexico',
	description: "Basically, three things: 1. Co-generate demand for new information and communication technologies in our region. 2. Enable productive use of ICTs in public sector. 3. Promote simple, useful and actionable public policies to regulate ICTs offer/demand. Browse our initiatives for more insight!",
	bio: "Focus on social prosperity creation though innovation and technology, listed in the 100 Best CIOs of Mexico in 2012, with entrepreneurial spirit has designed and deployed e-government programs and digital marketing projects for both public and private sectors; which have received national awards as most innovative solutions for country's development. Currently Chairman of CIAPEM, a non-profit organization dedicated to facilitate knowledge transfer within the 32 states and 2443 municipalities of Mexico in order to promote broader inclusion to the global information society.")
Individual.create(place:mexico,
	name: 'Leonel Azuela',
	title: '',
	location: 'Mexico City, Mexico',
	description: "",
	bio: "")
Individual.create(place:mexico,
	name: 'Farid Alfredo Bielma Lopez',
	title: 'Founder at COSITMX',
	location: 'Coatzacoalcos, Veracruz, Mexico',
	description: "Develop initiatives to promote entrepreneurship ecosystem.",
	bio: "Farid Alfredo Bielma López currently chairs COSITMX, an organization that cultivates technological entrepreneurship in southeastern Veracruz.
COSITMX coordinated the Internet2 project at the Higher Technological Institute of Coatzacoalcos, Visiflex for the Higher Technological Institute of Veracruz, the job portal for the Coatzacoalcos municipal government and developed a budget system for the Secretary of Social Development of Distrito Federal.")
Individual.create(place:mexico,
	name: 'Jorge Soto',
	title: 'Co-Founder and CSO at Citivox',
	location: 'Mexico City, Mexico',
	description: "",
	bio: "")
Individual.create(place:mexico,
	name: 'Jorge Miguel Rodriguez Ramirez',
	title: 'General Director at Eondive Group',
	location: 'Xalapa , Veracruz, Mexico',
	description: "",
	bio: "")
Individual.create(place:mexico,
	name: 'Ramon Parra',
	title: '',
	location: '',
	description: "",
	bio: "")
Individual.create(place:mexico,
	name: 'Ben Cessa',
	title: 'Developer',
	location: 'Fortin de las Flores, Veracruz, Mexico',
	description: "",
	bio: "Born September 25th, 1984. Started designing, programming and in general developing about 7 years ago, being doing it ever since. Founded Pixative, a technology focused startup, and am now partnering with Telefonica and others in the development of a couple of projects.")
Individual.create(place:mexico,
	name: 'Javier De la Fuente',
	title: '',
	location: '',
	description: "",
	bio: "")
