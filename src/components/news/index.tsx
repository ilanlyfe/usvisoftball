import Image from "next/image";
const posts = [
  {
    id: 1,
    title: "The USVI team is headed to the Bahamas!",
    href: "/stories/story-1",
    description: `The spirited women's softball team from the Virgin Islands is gearing up for an exciting journey across the Caribbean waters to the beautiful Bahamas. With unwavering dedication and a shared passion for the game, this remarkable group of athletes is set to represent their homeland on the international stage. Their journey isn't just about competition; it's a celebration of unity and sportsmanship, showcasing the vibrant culture of the Virgin Islands to the world. As they embark on this adventure, they carry the hopes and dreams of their community, ready to face tough opponents and create lasting memories in the Bahamas softball tournament. With their determination and team spirit, these women are not just playing for victory; they are playing for the pride and spirit of their islands.`,
    imageUrl:
      "https://www.usvisoftballfederation.org/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-05-at-8.25.43-PM-768x960.jpeg",
    date: "Sep 16, 2023",
    datetime: "2023-09-16",
    category: { title: "Tournament", href: "#" },
    author: {
      name: "Patricia Phillips",
      role: "Treasurer",
      href: "/stories/story-1",
      imageUrl: "/pat.jpg",
    },
  },
  {
    id: 1,
    title:
      "St. John Parks and Recreation Department starts 23U RBI Women’s Softball League",
    href: "/stories/story-1",
    description:
      "Department of Sports, Park and Recreation Start 23U RBI Women’s Softball League",
    imageUrl:
      "https://stthomassource.com/wp-content/uploads/sites/2/2021/12/RBI-Softball-Amaya-Catching-scaled.jpg",
    date: "Sep 22, 2023",
    datetime: "2023-09-22",
    category: { title: "Tournament", href: "#" },
    author: {
      name: "Sherry-Ann Francis",
      role: "Treasurer",
      href: "/stories/story-1",
      imageUrl: "/sherry.jpg",
    },
  },
  {
    id: 1,
    title:
      "USVI Women Still in Contention for Caribbean Softball Title Despite Loss to Curacao on Friday",
    href: "/stories/story-1",
    description:
      "Curacao softball team members at the 2023 English Caribbean Amateur Softball Confederation tournament on St. John. By V.I. CONSORTIUM ST. JOHN — Despite a loss to Curacao on Friday, the Virgin Islands National Women’s Softball Team is still in contention for a first-place finish at the 2023 English Caribbean Amateur Softball Confederation (ECASC) Women’s Fast-Pitch Tournament Qualifier. After having dispatched St. Maarten on Wednesday, Aruba on Thursday, and the British Virgin Islands during their first game of Friday’s double-header, the USVI women went down 9-0 to Curacao, leaving the visitors the only unbeaten team of the tournament. ",
    imageUrl: "https://viconsortium.com/editor_new/source/Curaca-Softball.jpg",
    date: "Sep 23, 2023",
    datetime: "2023-09-23",
    category: { title: "Tournament", href: "#" },
    author: {
      name: "Sherry-Ann Francis",
      role: "Treasurer",
      href: "/stories/story-1",
      imageUrl: "/sherry.jpg",
    },
  },
  {
    id: 1,
    title: `Celebrating #22 Ty'elle Jepesen`,
    href: "/stories/story-1",
    description:
      "With a killer game on Saturday, the USVI team is on their way to the Olympics! They are going to be the first team to represent the USVI in the Olympics. We are so proud of them!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKM9sUaS5AAZufhiAOlywa4H-S0co7KgufgsBQRJDecIK9iwD_AbY6_9PvqjcAkTgpah4&usqp=CAU",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Tournament", href: "#" },
    author: {
      name: "Sherry-Ann Francis",
      role: "Treasurer",
      href: "/stories/story-1",
      imageUrl: "/sherry.jpg",
    },
  },
  {
    id: 1,
    title:
      "LOCAL SPORTS ROUNDUP: St. Thomas teams win VISPRD girls softball tourney",
    href: "/stories/story-1",
    description:
      "A pair of teams from St. Thomas beat their St. Croix counterparts to win division titles in the Virgin Islands Sports, Parks and Recreation Department’s 13-under and 18-under invitational girls softball tournament over the weekend on St. Croix.",
    imageUrl:
      "https://bloximages.newyork1.vip.townnews.com/virginislandsdailynews.com/content/tncms/assets/v3/editorial/3/82/382bdcb0-e5fd-5e97-9cb0-c9c0a870d189/5e7044b3782ba.image.jpg?resize=764%2C500",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Tournament", href: "#" },
    author: {
      name: "Sherry-Ann Francis",
      role: "Treasurer",
      href: "/stories/story-1",
      imageUrl: "/sherry.jpg",
    },
  },

  // More posts...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is happening...{" "}
          </h2>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    src={post.imageUrl}
                    alt=""
                    height="600"
                    width="600"
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <Image
                        src={post.author.imageUrl}
                        alt=""
                        height="600"
                        width="600"
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
