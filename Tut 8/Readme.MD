/*
Header
  Logo
  Nav Items
Body
  Search
  RestaurentContainer
    RestaurentCard
      Img
      Name of Res, Star Rating, Cuisine delivery time
  Footer
    Copyright
    Links
    Address
    Contact
*/

Render components

  {/* <RestaurentCard resName = "Meghna Foods" coisine="Biryani, North Indian, Asian" ratings="4.4 stars" delTime="38 miutes"  />
                    <RestaurentCard resName = "KFC" coisine="Burger, Fast Food" ratings="4.2 stars" delTime="44 minutes" /> */}
                    {/* <RestaurentCard data={data2[0]} />
                    <RestaurentCard data={data2[2]} /> */}
                    {/* <RestaurentCard resData={resList} /> */}
                    {/* OR */}
                    {
                        resList.map((restaurant) => (
                            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                        ))
                    }