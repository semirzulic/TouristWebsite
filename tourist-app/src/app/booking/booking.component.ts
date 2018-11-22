import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }
}



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  items = [
    {
      title: 'History of Tuzla',
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 1, */
      summary: `Tuzla is one of the oldest settlements in Europe with a continuity of living. In Tuzla was found the oldest resort in Europe, dating back to the Neolithic Age (the youngest stone age), unlike other foundations of the so-called settlements in Europe dating from the Iron Age. A large number of Neolithic objects were found in Tuzla, among which a special place is the storage tanks, ie salted water salt vessels.`,
      text: `Tuzla is one of the oldest settlements in Europe with a continuity of living. In Tuzla was found the oldest resort in Europe, dating back to the Neolithic Age (the youngest stone age), unlike other foundations of the so-called settlements in Europe dating from the Iron Age. A large number of Neolithic objects were found in Tuzla, among which a special place is the storage tanks, ie salted water salt vessels. These archeological finds confirm that other Neolithic inhabitants in this area exploited salty springs. The earliest European cultures used by it were dated to the Copper Age, meaning that the neolithic finds in Tuzla move the boundaries of knowledge and use of salt in human nutrition from the age of eneolite to the neolithic age. It should be noted that the Neolithic settlement was found in the very center of today's town of Tuzla, which is a unique case and proof that this settlement was the beginning of the continuity of living in the area of today's city, throughout all historical periods, from Neolith to today.
      
      These archeological finds confirm that other Neolithic inhabitants in this area exploited salty springs. The earliest European cultures used by it were dated to the Copper Age, meaning that the neolithic finds in Tuzla move the boundaries of knowledge and use of salt in human nutrition from the age of eneolite to the neolithic age. It should be noted that the Neolithic settlement was found in the very center of today's town of Tuzla, which is a unique case and proof that this settlement was the beginning of the continuity of living in the area of today's city, throughout all historical periods, from Neolith to today. Salt production and its revenues were the key factor that Tuzla had built as kasabu. Organized production and sale of salt is the result of the digging of the wells on today's Sonom Square in 1476 and the proclamation of Tuzla "the Emperor" in 1477. The production of salt is distinguished from the names which were solated by the arrival of the Ottoman Emperor Solana on wood, (Agac Tuzla, Memleha and Cob), thus emphasizing the difference between these and the salt solana.

      On the Square of Sona there were up to 80 pots of soda water from the wells. At the beginning, modest amounts of salt were produced, and over time they increased. The reason for this is not so much in technical and technological progress, as in the increase of the population of Tuzla, which was related to salt production. For Tuzla, it was known outside of the Bosnian eyal. In the 17th century, King Louis XIV, through his merchants, acquired the Tuzla for his court. Evidence of this is French coinage with the figure Luja XIV, found in the area of ​​Tuzla. So it connected the various countries, cultures and civilizations of that time. Tuzla's sake was one of the basic articles that introduced the Bosnian eyalet at the International Economic Exposition in Philadelphia in 1876.
      
      One of the basic goals of the annexation of Bosnia and Herzegovina by the Austro-Hungarian monarchy was the exploitation of natural resources, and among them a special place was occupied by the Tuzla war. The first salt mill, built in the suburb of Tuzla, in Simin Hanu, in 1885, was the beginning of industrial salt production in Tuzla. Soon after, the city began to sink, as a result of the uncontrolled sowing of salt from the rock salt deposits, where the city was located. Toning will experience its culmination in the 70s of the last century, when the city remained without several thousand residential, commercial and cultural facilities. It is a god who built and destroyed Tuzla, but also culturally determined in its specialty`
    },
    {
      title: 'Tuzla attractions map',
      url: 'https://getbootstrap.com/docs/4.1/getting-started/accessibility/',
      /* id: 2, */
      summary: `Tuzla attractions map`,
      text: "Tuzla attractions map"
    },
    {
      title: "Pannonian lakes",
      url: 'https://getbootstrap.com/docs/4.1/migration/',
      /* id: 3, */
      summary: `The complex of salted Pannonian lakes is the only salt lake and unique tourist attraction in Europe.`,
      text: `
      The complex of salted Pannonian lakes is the only salt lake and unique tourist attraction in Europe. The city of Tuzla is the winner of the highest award of the World Tourism Organization Odyssey, "United Nations" (2012 UNWTO ULYSSES AWARD) awarded for innovation in the field of tourism. Tuzla is the only city in Europe that has salt lake and the only city in the world whose salt lakes, beaches and beaches are located in the city center. The complex of the Pannonian Lakes consists of three lakes of different sizes and depths, and Slani waterfalls. Within the complex of the Pannonian Lakes, there is the Archeological Park Neolithic-Shared settlement and the Museum geological setting "Pannonica" , children's amusement park, sports fields, and many other catering, cultural and entertainment facilities. In 15 years Panonika complex has visited more than 3.7 million tourists.
      `
    },
    {
      title: 'The central city park',
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 4, */
      summary: `Tuzla is the city with the largest park areas in Bosnia and Herzegovina. The central city park is located in the pedestrian zone of the historical core of Tuzla.`,
      text: `Tuzla is the city with the largest park areas in Bosnia and Herzegovina. The central city park is located in the pedestrian zone of the historical core of Tuzla. It consists of pedestrian paths paved with granite, a bench for relaxation and relaxation. Wi-Fi is available to visitors to the park. The City Park has monuments inspired by the Bosnian Middle Ages, and the central place occupies the statue of the first Bosnian king Tvrtko I Kotromanić. There is also a stone obelisk, on which the text of the Kulina Bana Charter is printed. The bridge is provided with a quality pedestrian connection of the Central City Park with the complex of the Pannonian Lakes. Pasarela is the cluster of the two largest pedestrian zones in the center - the complex of Slana Spa and the historical city core.`
    },
    {
      title: 'Archaeological Park-Neolithic Shared Settlement',
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 5, */
      summary: `Tuzla is a city that links its name and its past to the salt, the natural wealth that remained below Tuzla after the Pannonian Sea withdrew to the Black Sea 10 million years ago, in the form of salt water and stone salt.`,
      text: `Tuzla is a city that links its name and its past to the salt, the natural wealth that remained below Tuzla after the Pannonian Sea withdrew to the Black Sea 10 million years ago, in the form of salt water and stone salt. The cost and cultural tradition of the city of Tuzla goes far in past, until the Neolithic - the young Stone Age, and perhaps still. Within the Pannonian Complex, there is an Archaeological Park-Neolithic Shared Settlement. Neolithic settlement is a reconstruction of the way of life that existed in this region more than 7,000 years ago, based on discovered objects from the Neolithic period, and whose time of origin was confirmed by the Archaeological Institute in Vienna using the C4 method. This, unique space has a multifaceted meaning, not only for the tourist offer of Tuzla and the region, but also in terms of valorization of the cultural and historical heritage.`
    },
    {
      title: 'Sports and recreational complex Slana banja',
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 6, */
      summary: `The complex of the Pannonian Lakes continues directly to the sports and recreational complex Slana banja, which is one of the most wide-ranging and best-kept central parks in BiH.`,
      text: `The complex of the Pannonian Lakes continues directly to the sports and recreational complex Slana banja, which is one of the most wide-ranging and best-kept central parks in BiH. In addition to walking and jogging tracks, this complex includes a complex of tennis courts, a playground for small football and basketball, and some of the memorials from the recent history of the city. In this area are the memorials of the heroes and victims of the Second World War, the war veterans 1992-1995, and the civilian victims of the war, that is, the Tuzla youth that had been killed at the Gate in 1995. Within the Slana spa there is the House of the Flame of Peace, intended for activities of young people, their creative initiatives and ideas, as well as several catering facilities. The central part of the complex is decorated with fountain with sculpture Leda, by the work of the famous Tuzla sculptor Franjo Leder.`
    },
    {
      title: "Children's amusement park",
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 7, */
      summary: `In the children's amusement park, all toys and devices are divided over the age limit, such as toys for children up to 3 years, from 3 to 6 years and from 6 to 14 years.`,
      text: `In the children's amusement park, all toys and devices are divided over the age limit, such as toys for children up to 3 years, from 3 to 6 years and from 6 to 14 years. In this unusual amusement park, which has about a mile of asphalt paths, various entertainment devices have been installed - slides, swings, skaters, houses, even a boat, and a number of other game devices. For safety reasons, around the appliance are tartan rubber and sawdust pads to alleviate possible falls, as well as resting benches.`
    },
    {
      title: "Bingo ZOO",
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 8, */
      summary: `Zoo Garden Bingo is located near the town of Tuzla, 800 meters away from the Tuzla-Sarajevo main road. `,
      text: `Zoo Garden Bingo is located near the town of Tuzla, 800 meters away from the Tuzla-Sarajevo main road. Within the ZOO garden there is a restaurant, playground, football pitch and promenade, and there is also a small lake that gives this ambiance a special charm.`
    },
    {
      title: `International atelier "Ismet Mujezinovic"`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `The international atelier "Ismet Mujezinovic" is unique that there lived and worked one of the most important Bosnian artist, cultural worker and painter Ismet Mujezinovic.`,
      text: `
      The international atelier "Ismet Mujezinovic" is unique that there lived and worked one of the most important Bosnian artist, cultural worker and painter Ismet Mujezinovic. Family members donated his house and atelier to the City of Tuzla. Staying at the International Atelier means a six-month stay and work of fine artists, as well as organizing a solo exhibition of works created during the stay in Tuzla. A number of art workshops are held in the studio, an apartment is also equipped in which artists from all over Europe come 2 to 3 times a year. It is a place where concerts, exhibitions, promotional books, art galleries in the center of the city are organized, a place for organizing and many other events`
    },
    {
      title: `International portrait gallery`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      Over the last three decades the Gallery emerged as a fine arts institution of considerable importance organizing review exhibitions of contemporary portraits and retrospective exhibitions of the most famous artists from Bosnia and Herzegovina. `,
      text: `
      Over the last three decades the Gallery emerged as a fine arts institution of considerable importance organizing review exhibitions of contemporary portraits and retrospective exhibitions of the most famous artists from Bosnia and Herzegovina. The Portrait Gallery also organizes the well-known exhibition “Tuzlanski salon 2x13”, as well as exhibitions of works by young artists in the Gallery Club. The Gallery expanded the range of its activities by creating the first biennial festival of drawings and graphics INTERBIFEP, an international event taking place in Bosnia and Herzegovina and one of the four of this kind in former Yugoslavia. Thanks to its regular and part-time activities the Gallery has gathered several valuable collections. Each of the collections represents a cultural treasure for the Gallery and the country, making it unique as regards cultural inheritage.`
    },
    {
      title: `International atelier "Ismet Mujezinovic"`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds. Since its beginnings it worked to collect exhibits from the national liberation war, archaeology, art history and mineral riches from northeast Bosnia. Museum of East Bosnia holds an archaeological, ethnologica, historical, numizmatic, art and biological collections. Among the 50.000 exhibits, continuity of the past 6500 years of life in Tuzla can be observed.`
    },
    {
      title: `International atelier "Ismet Mujezinovic"`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds. Since its beginnings it worked to collect exhibits from the national liberation war, archaeology, art history and mineral riches from northeast Bosnia. Museum of East Bosnia holds an archaeological, ethnologica, historical, numizmatic, art and biological collections. Among the 50.000 exhibits, continuity of the past 6500 years of life in Tuzla can be observed.`
    },
    {
      title: `Airports`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      Tuzla International Airport (Bosnian: Međunarodni aerodrom Tuzla) is an airport near Tuzla, Bosnia and Herzegovina. Tuzla International Airport is second largest airport in Bosnia and Herzegovina, after Sarajevo International Airport.`,
      text: `
      Tuzla International Airport (Bosnian: Međunarodni aerodrom Tuzla) is an airport near Tuzla, Bosnia and Herzegovina. Tuzla International Airport is second largest airport in Bosnia and Herzegovina, after Sarajevo International Airport. The airport is known as a low-cost airline hub of Bosnia and Herzegovina, since it is used by people from Bosnia, the diaspora and travelers from neighboring countries Croatia and Serbia. The airport is a civilian airport and a military airbase. Sarajevo International Airport (Bosnian: Međunarodni aerodrom Sarajevo) also known as Butmir Airport, is the main international airport in Bosnia and Herzegovina, serving Sarajevo, capital of Bosnia and Herzegovina. It is located 3.3 NM (6.1 km; 3.8 mi) southwest of the Sarajevo railway station and some 6.5 NM (12.0 km; 7.5 mi) west of downtown Sarajevo in the Ilidža municipality, suburb of Butmir. In 2017, 957,971 passengers traveled through the airport, compared to 323,499 in 2001. Belgrade Nikola Tesla Airport (Serbian: Aerodrom Nikola Tesla Beograd) is an international airport serving Belgrade, Serbia. Previously known as Belgrade Airport (Serbian: Aerodrom Beograd) or Surčin Airport (Serbian: Aerodrom Surčin), it was renamed in 2006 in honor of Serbian scientist and inventor Nikola Tesla. It is the largest and busiest airport in Serbia, situated 18 km (11 mi) west of downtown Belgrade near the suburb of Surčin, surrounded by Syrmia's fertile lowlands. The flag carrier and largest airline of Serbia, Air Serbia, uses Belgrade Nikola Tesla as their hub. It is also one of the operating bases for low-cost airline Wizz Air. The air taxi services Air Pink, Eagle Express and Prince Aviation also call the airport their home. The airport is operated by the state-owned company "Aerodrom Nikola Tesla Beograd". Franjo Tuđman Airport (Croatian: Zračna luka „Franjo Tuđman”) also known as Zagreb Airport, is the largest and busiest international airport in Croatia. In 2017 it handled around 3.1 million passengers and some 12,000 tons of cargo. Named after Franjo Tuđman, the first President of Croatia, the airport is located some 10 km (6.2 mi) south-east of Zagreb Central Station[4] at Velika Gorica. It is the hub for the Croatian flag carrier Croatia Airlines as well as Trade Air. A base of the Croatian Air Force is located within the airport complex, in barracks called "Colonel Marko Živković". An administrative centre of the Croatian Air Traffic Control is also situated on the grounds of the airport. The airport was awarded to the ZAIC consortium (Zagreb Airport International Company) in a 30-year concession under the terms of a contract signed by the Government of Croatia with the aforementioned. The contract includes the financing, designing and construction of a new passenger terminal which was completed in March 2017. For the purpose of managing the airport ZAIC registered a company called MZLZ d.d. (Međunarodna zračna luka Zagreb d.d.) that is now the operator of the Airport.
      `
    },
    {
      title: `Rent a Car`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      Perfect doo Tuzla is a renowned car rental agency, positioned at the very top of the Bosnian-Herzegovinian market, which based its existence on long-term education, experience, knowledge and work of management and employees. The leading position provides us with knowledge, reliability, experience, tradition, innovation and following the world trends automotive industry and comfortable / safe travel. We are a professional and courteous young team of people who will come out at any moment Meet the client and do everything to be satisfied with our services. This is supported by a large number of permanent clients, who regularly show us their trust by choosing a vehicle from our offer. The company's headquarters are located in Tuzla and you can rent a vehicle to be realized in the central office, as well as in the office at the International Airport Tuzla, as well as on request, in any city of BiH and Europe. Inspired by the sophisticated wishes of long-time clients, they concentrated on renting car services that meet even the most demanding customers. The fleet consists of brand new vehicles of all categories. All vehicles are fully insured, without any damage, have a general and mobile warranty, all legally prescribed equipment and do not exceed the age of 2 years. The fleet offers you passenger cars of world-renowned manufacturers that offer absolute comfort, safety and speed, both in urban and out-of-town driving.
      Intercar je rent a car agency positioned at the very top of the Bosnian-Herzegovinian market. A well-thought-out business organization and an experienced network of associates are able to rent a car service to cover the whole area of ​​BiH, and at your request organize a rental car in other parts of Europe. Provide complete mobility and transfers in the optimal way conditions for users. Intercar also has cooperation with all the airports in the region (Sarajevo, Belgrade, Zagreb, Split, Dubrovnik) and carries out the delivery and takeover of the vehicle at the mentioned destinations. Intercar is a rent a car agency positioned at the very top of the Bosnian-Herzegovinian market since 2001. Leadership provides us with knowledge, reliability, experience, tradition, innovation and tracking global trends in automotive industry innovation and travel. We are able to work with a thoughtful organization of business and an experienced network of associates Rent a car services to cover the whole area of ​​BiH in a good way, and we will ask for your request Organize a rental car in other parts of Europe. Intercar offers its services in 7 branches in all major cities of BiH. We own a fleet with around 200 new models of passenger and freight vehicles from the group AUDI, SEAT, VW, ŠKODA, TOYOTA, NISSAN, CHEVROLET, with the finest equipment tailored to business travel requirements. We offer complete mobility and transfers under the optimum conditions for users. Intercar also has cooperation with all airports in the region (Sarajevo, Belgrade, Zagreb, Split, Dubrovnik) and delivers and download the vehicle at the mentioned destinations. And not just that. We are available 24 hours a day for all 365 days a year whereby we guarantee you superior service and complete technical support!
      In Dalton rent a car agency there are no limits in terms of kilometers that you can cross the vehicles. Travel safely and comfortably wherever you want. If you assign multiple vehicles, or one vehicle for a longer period of time, approve additional discounts. It is possible to rent vehicles in one direction. You can download a vehicle in one location, and bring it back to the other, the one that suits you.
      `
    },
    {
      title: `Taxi Service`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      Association “Tuzla taxi” represents the Association of Car Taxi Operators of the City of Tuzla and is respectable expert and business the organization of craftsmen who carry out the activity of autotracking transport of persons in public urban traffic in the territory of the City of Tuzla and the region. The Association promotes, coordinates and advocates the common interests of affiliated members in which it currently has 250 active taxi drivers.They are distinguished by speed, comfort and safety, and vehicles arrive at your address within five minutes. They are proud of the flexibility and speed which allows them to be available from 0 to 24 hours, 365 days a year, making them one of the best taxi services in Bosnia and Herzegovina. You can find their services at all taxi locations around the city of Tuzla or by simply dialing 15-17 where friendly drivers will welcome you and take you safe, comfortable and at affordable prices to your destination in Tuzla, both throughout Bosnia and Herzegovina and Europe. Gradski Taxi 15-25 successfully operates in the city of Tuzla, but also wider. By ordering number 15-25, order a taxi in a few minutes. City taxi operates in 10 countries and nearly 150 cities around the world. Radio tax non-stop not just an ordinary taxi, it's a taxi association made up of members who are engaged in this job for many years. They know how to answer quality services transport of passengers. All of their vehicles are regularly maintained air-conditioned and comfortable so that they can exercise transport and to remote addresses in the country and abroad. They are at your service 24 hours a day for 7 days in the week. Call at any time of the day and Radio taxi will stop at the shortest possible time your address and translate you safely to your desired destination ..
      `
    },
    {
      title: `Public Transport`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      GIPS The main business of the company DD Gradski i prigradski saobraćaj Tuzla is transportation of passengers which is carried out on city, municipal and cantonal lines. The company carries out regular, extraordinary and contractual character, and provides cellular services. The delivery of individual tickets is done directly in vehicles and using the Vessel Bus Card while selling through a special service only monthly charts, but in several locations. The core business focus was and remained the same, and these are activities in improving the transport service from all aspects: safety, comfort, price, kindness, availability, accuracy. The mission of the company is reflected in the high quality public transport service with long-term satisfaction of the liquidity principle and profitability`
    },
    {
      title: `Nextbike`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      Nextbike system exists in Germany, Austria, Latvia, Poland, Switzerland, Turkey, Hungary, Croatia, Bosnia and Herzegovina and many other countries. Each registered next user can rent a bike in any country where this system exists.`
    },
    {
      title: `Hotels`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      Hotel Mellain
      Hotel Mallain
      Hotel Mellain is located in the center of Tuzla, one of the most attractive locations connecting the most important economic, educational and cultural institutions. The vicinity of the airport, university and clinical centers, the complex of the Pannonian Lakes contributes to the attraction of this modern hotel. Tuzla and Mellain Hotel have preserved the tradition of treating old ages and made it possible for everyone to experience the magic of this unique "spa".

      Reservation
      Address: Aleja Alija Izetbegović no. 3 
      Phone: +387 35 365 500 
      Email: info@mellainhotel.com 
      Website: mellainhotel.com

      Hotel Tuzla
      Hotel Tuzla
      Hotel 'Tuzla' has 12 floors, the first three floors of which are completely renovated. The hotel has de luxe rooms and standard room categories. The de luxe room has 51 (8 suites), rooms with a double bed. All rooms are modernly equipped with all the necessary facilities and techniques. More than 170 standard rooms are located on the upper floors of the Tuzla Hotel. Within the hotel there is a modern restaurant with a capacity of 300 seats.

      Reservation
      Address: ZAVNOBIH-a 13 
      Phone: 035 369-600 
      Email: info@a-hoteli.com 
      Website: Hotel Tuzla

      Hotel Dom penzionera
      Hotel 'Dom penzionera'
      The "Pensioners' House" is located in the very center of the city, close to the numerous facilities needed by business guests, and is a convenient starting point for exploring the city and vacationing on the Pannonian Lakes. In a separate part of the building, guests have at their disposal single and double rooms with air conditioning, free internet, LCD TV etc. The hotel is also an ideal place for organizing various events, such as seminars, meetings, workshops, congresses, presentations and similar events.

      Reservation
      Address: Filipa Kljajića br. 22 
      Phone: 035/ 270-002 
      Email: dompenzionera@bih.net.ba 
      Website: dompenzionera.ba

      Hotel Tehnograd
      Hotel 'Tehnograd'
      Hotel 'Tehnograd' is located in the town of Slavinovići and as such provides a pleasant stay away from the city noise and crowds. It has 67 rooms and two apartments. All rooms have a private bathroom, balcony, cable TV, heating and free internet access. Guests can use the reception, where in a pleasant atmosphere they can have coffee or some other refreshment. A buffet breakfast is a service served in a closed restaurant next to the hotel. For all guests, free video surveillance parking is provided for small and large vehicles.

      Reservation
      Address: Lazerević bb 
      Phone: +387 35 226-396 
      Email: info@hotel-tehnograd.com 
      Website: hotel-tehnograd.com

      Hotel President
      Hotel 'President'
      Hotel 'President' has a capacity of 14 rooms and 1 apartment. The rooms are modernly furnished, air-conditioned. The entrance to the room is enabled by magnetic cards. For relaxation, there is a wellness center with pool, jacuzzi, saunas and other accompanying contents. The hotel has a modern multifunctional hall, which is the perfect place to hold congresses, panels, seminars and all other types of meetings. The hall is designed for groups of 80 people. Hotel President has a modern restaurant, capacity of 150 people and its diverse gastronomic offer, attracts guests not only from the TK area, but also much wider.

      Reservation
      Address: Magistralni put A224 Tuzla - Sarajevo 
      Phone: +387 35 808-549 
      Email: info@presidenthotel.ba 
      Website: presidenthotel.ba

      Hotel Heartland City
      Hotel 'Heartland City'
      Heartland City Hotel is located in the city center of Tuzla at Kazan Mahala No.10. has a capacity of 550 square meters of indoor space, within the café pizzecie Heartland, which makes it one of the leading hotels in the region. It is located close to all shopping centers, 300 meters from Aqua Bristol Aqua Bristol which offers a tradition of treating salty water.The hotel is located at 300 meters of distance from the Pannonian Lakes with healing properties of salt and minerals, which in its complex contains three lakes of various sizes and depths, salt waterfalls, the Sojenic Neolithic settlement and sports fields.

      Reservation
      Address: Kazan mahala 10 
      Phone: 035 255-111 
      Email: 
      Website: hotel-heartland-city

      Hotel Miris Dunja 88
      Hotel 'Miris Dunja 88'
      We are located in the strict center of Tuzla and pedestrian zone in the immediate vicinity of the complex of the Pannonian Lakes. Hotel capacity is 70 beds in 1/1, 1/2 rooms and apartments. Each room has a bathroom, LCD TV with cable antenna, wireless connection, air conditioning and own central heating. Hotel "Miris Dunja 88" has a restaurant with a meeting room and seminars with up to 100 seats. Organizes: less ceremonies, receptions, cocktails, seminars, business meetings etc.

      Reservation
      Address: Goli brijeg 8 
      Phone: 035 296-453 
      Email: info@mirisdunja88.ba 
      Website: mirisdunja88.ba

      Hotel Golden star
      Hotel 'Golden star'
      Guests can use the hotel parking about 50 meters from the hotel. Hotel Golden star is a top choice for accommodation of business guests, tourists and other guests who visit the city of Tuzla and the region individually or in a group as well as participants and visitors of various sports events, congresses and fairs. The hotel has superbly equipped rooms. 



      Reservation
      Address: Jevrejska 5 
      Phone: 035 258-100 
      Email: info@goldenstarhotel.ba 
      Website: goldenstarhotel.ba

      Motel Rudar
      Motel 'Rudar'
      Motel 'Rudar' is located in Tuzla and contains air-conditioned accommodation, restaurant and bar. Guests can use free Wi-Fi and private parking on site. It has 20 rooms equipped with cable TV. They all have a private bathroom with bath or shower. Some rooms have a balcony. A 24-hour front desk and a shop are available. Motel 'Rudar' is 2 km from the center of Tuzla. The nearest airport is Tuzla International Airport, 12 km away from the motel. 



      Reservation
      Address: MITRA TRIFUNOVICA UCE BR 9 
      Phone: +387 35 281-297 
      Email: 
      Website: rudar.ba

      Motel Royal
      Motel 'Royal'
      Motel 'Royal' has ten rooms equipped with plasma televisions, air conditioning, mini bar and unlimited internet access. Within the motel there is also a restaurant with a hundred seats, which is also air-conditioned and has separate rooms. You can organize all meetings, trainings, organized meetings or simply socializing, such as birthdays, weddings, graduation celebrations, etc., right at this location at very reasonable prices. 'Royal' also has a meeting room with a capacity of 30 seats, and for larger seminars or conferences, a restaurant is also available.

      Reservation
      Address: Bosne srebrene 105/A 
      Phone: +387 35 315 666 
      Email: info@royalmotel.ba 
      Website: royalmotel.ba

      Motel Iveljić Tuzla
      Motel Iveljić Tuzla
      Motel Iveljić is situated at the very entrance to Tuzla on the main road in the industrial zone, not far from TE Tuzla. We offer our guests a pleasant accommodation with a rich restaurant offering of food and drink. 





      Reservation
      Address: Bukinjska ulica 
      Phone: +387 35 207 123 
      Email: 
      Website: motel-iveljic.com.ba

      Pansion Centar Tuzla
      Pansion 'Centar' Tuzla
      Pansion "Centar" is located in the center of the city, more precisely on the Soln square. Rooms are equipped and decorated to modern standards, and their stay in them is comfortable and relaxing. The location of the facilities allows for direct access to the main promenade of the city of Tuzla, the vicinity of the Pannonian lakes, the recreational and promenade complex Slana Banja, the sports and recreation center "Mejdan", the city's main market and many other amenities offered by this city. 

      Reservation
      Address: Trg Stara Tržnica 8 
      Phone: +387 61 149 291 
      Email: pansioncentar@hotmail.com 
      Website: pansioncentar.com

      Pansion Nargalić
      Pansion 'Nargalić'
      The pension is located in the city center, not far from the old city center. It has 3 apartments and 4 rooms. Rooms have heating and cable TV and the internet. The guest house has its own parking lot. The pension is in the immediate vicinity of historical and modern monuments of Tuzla. In the vicinity is one of the largest shopping centers Mercator, as well as numerous cafes and clubs.

      Reservation
      Address: Kazan Mahala 40 
      Phone: +387 35 256160 
      Email: 
      Website: pansion-nargalic.com

      Pansion Kipovi
      Pansion' Kipovi'
      Pension ' Kipovi ' is located in the center of the city at " Mosta Kipovi ". It offers guests a quality service. It has single, double and triple rooms equipped with air conditioning, internet and TV connection with a large selection of channels. The restaurant is of basic type and offers only breakfast in the form of a Swedish table / offer. 


      Reservation
      Address: Franjevačka bb 
      Phone: +387 62 389 478 
      Email: pansionkipovi@gmail.com 
      Website: pansionkipovi.com`
    },
    {
      title: `Restaurants`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      Pub Taverna
      Hotel Mallain
      With many years of tradition and a new ambiance, Pub Taverna is an indispensable place for those who are looking for the best. Famous for its specialties and unfiltered beer, it is a perfect place to come to a family lunch, relaxing drinks after work or evening with friends. 




      Reservation
      Address: Aleja Alija Izetbegović no. 3 
      Phone: +387 35 365 500 
      Email: info@mellainhotel.com

      Zlatnik
      Zlatnik
      In the very center of the city, next to the Slana Banja promenade, Restaurant Zlatnik is located. In the heart of nature, next to the Pannonian Lake, there is a restaurant with a beautiful ambience decorated with a spacious summer garden. An extraordinary rich gastronomic offer, ranging from traditional dishes to various international dishes to the most demanding guest, will provide the ultimate pleasure in every bit of food.

      Reservation
      Address: Šetalište Slana banja, Tuzla 
      Phone: 035 261-225 
      Email:

      Sezam
      Sezam
      Restaurants 'Sezam'have long been known for their name and brand in Tuzla, as well as for visitors and for sure a large number of visitors and tourists. From their rich offer, they offer grilled specialties, excellent Bosnian cuisine, ready-to-eat dishes, various specialties to meat, dishes on order, cheeses, pizzas and a great selection of cakes and treats.

      Reservation
      Address: Šetalište Slana Banja bb 
      Phone: 035 273-544 
      Email:

      Royal
      Royal
      The restaurant 'Royal' in a pleasant ambience offers its guests a diverse Mediterranean but also imaginative Italian cuisine that is rare in this area. In addition to unusual dishes and unique, Royal Restaurant is able to arrange weddings or other festive occasions or business lunches so that it remains in an unforgettable memory.

      Reservation
      Address: Bosne srebrene 105/A 
      Phone: +387 35 315 666 
      Email: info@royalmotel.ba

      Citta del Sale
      Royal
      In the Citta del Sale, you can enjoy grilled specialties, top-class Bosnian cuisine, prepared meals, a variety of meat specialties, dishes to order. Meals prepared and served from always fresh foods, meat and carefully selected ingredients are certainly a recipe for their success. 



      Reservation
      Address: Korzo, Tuzla 
      Phone: +387 62 860 105 
      Email:

      Česma
      Česma
      The 'Česma', as the Tuzlaci call this restaurant, is entirely decorated in Bosnian style. The exterior of the building reminds you of an antique Bosnian house, and the interior of the ambience is full of details and items that were once used and which will take you for a moment to the past. This restaurant, the first is a station of tourists who come to visit the city.

      Reservation
      Address: Trg žrtava genocida u Srebrenici 
      Phone: 035 258-408 
      Email:

      Heartland
      Heartland
      It will be a pleasure to welcome you to our newly opened City Hotel located in center of Tuzla, at Kazanmahala number 10. Our hotel is a restaurant and cafe pizzeria in one, which makes Heartland one of the leading hotels in the region. It is located in the city center, 300 meters from the spa Aqua Bristol, which offers a traditional salt water healing. Hotel is located 200 meters from the Pannonian lake with healing salt water.

      Reservation
      Address: Kazan mahala 10, Tuzla 
      Phone: +387 35 255 111 
      Email: info@heartland.ba

      Panonski lovac
      Panonski lovac
      On the third Pannonian Lake there is a restaurant ' Panonski Lovac ' which offers a rich gastronomic offer, beautiful interior, parking, two summer gardens. The restaurant organizes New Year's celebrations, birthdays, weddings, graduations, March 8th and all other forms of entertainment and celebrations with live music. 



      Reservation
      Address: Džindić Mahala 13 
      Phone: + 387 62 154 433 
      Email: panonica@bih.net.ba`
    },
    {
      title: `Tour 360`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      The City Guide 360 ​​project is the largest interactive web platform that is exclusively made up of 360 panoramic and high-resolution video and high-resolution video conferencing, which makes this platform unique and uncompetitive. New revolutionary technologies at the heart of the project provide access to the exclusive city view with panoramic 360 (3D) views, which is an advantage over standard views because it gives the user a virtual three-dimensional (reality) feeling that is "on-the-spot". Users can enjoy the amenities of all major traffic intersections in the city with the ambient sound (audio option), and by pushing the button, they can see the bird perspective of the city with open views of the quays and parks, to a wonderful view of the Pannonian Lake in Tuzla.`
    },
    {
      title: `Tuzla City map`,
      url: 'https://getbootstrap.com/docs/4.1/content/reboot/',
      /* id: 9, */
      summary: `
      The museum in Tuzla was founded in 1947 as a National Liberation museum. In 1962 it received the name Museum of East Bosnia, which is still holds`,
      text: `
      A map of Tuzla is a valuable tool to use as you plan your trip, but it's also really helpful once you arrive. With this Tuzla map, you'll be able to find your way around more easily (and wander without fear of getting totally lost!), and plan your days in Tuzla more effectively.`
    }



  ];

 

  show = false; 
 

  ngOnInit(){
    
  }

  

  query: string = '';
  showSearch() {
    /* console.log(this.query);
    console.log(this.query.length);
    if (this.query.length != '') {
      console.log(this.query);
      this.show = true;
    } else {
      this.show = false;
      console.log(this.query);
    } */
    console.log(this.query);
    console.log(this.query.length);
    if (this.query.length <= 1) {
      console.log(this.query);
      this.show = false;
    } else {
      this.show = true;
      console.log(this.query);
    }
  }





}

