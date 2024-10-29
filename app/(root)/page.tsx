import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Narasimha"
      },
      _id: 1,
      description: "THis is a description",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUj5F14wqqAhhyd3G0TPXiVO_S9xWm8QyWJw&s',
      category: "Labours",
      title:"we are labours"
    }
  ]

  return (
   <div> 
      <section className="pink_container">
        
        <h1 className="heading">PITCH YOUR STARTUP,<br /> CONNECT WITH ENTERPRENEURS
        </h1> 

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold" >
          { query ? `Search results for ${query}` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
          {
            posts.length > 0 ? 
            posts.map((post : StartupCardType , _index : number) => (
              <StartupCard key={post?._id} post={post}/>
            )
            )
            : 
              <p className="no-results"> No Startups found</p>
          }
        </ul>
      </section>
   </div>
  );
}
