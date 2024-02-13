import Header from "@/components/old_header";
import Hero from "./hero";
import Image from "next/image";
import Footer from "@/components/footer";
const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Scholarships raised", value: "$119 million" },
  { label: "New users annually", value: "46,000" },
];

const MOCK_JPG =
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
const people = [
  {
    name: "Elroy Hill",
    role: "Vice President",
    imageUrl: "/wanks.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Jose Rosario",
    role: "Director",
    imageUrl: MOCK_JPG,
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Athneil “Bobby” Thomas",
    role: "Vice President (STJ/STT)",
    imageUrl: "/bobby.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Emerito Torres",
    role: "Vice President (STX)",
    imageUrl: "/emerito.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Sherry-Ann Francis",
    role: "Treasurer",
    imageUrl: "/sherry.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Erainee Acosta",
    role: "Secretary",
    imageUrl: "/erainee.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Lloyd Jackson",
    role: "Manager",
    imageUrl: MOCK_JPG,
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Patricia Phillips",
    role: "Statician",
    imageUrl: "/pat.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Inocencia “Ching Ching”Bermudez",
    role: "Coach",
    imageUrl: MOCK_JPG,
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Leon Martin",
    role: "Coach",
    imageUrl: MOCK_JPG,
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Kareem Henley",
    role: "Coach",
    imageUrl: MOCK_JPG,
    twitterUrl: "#",
    linkedinUrl: "#",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  // More people...
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />
      <Hero />

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-10">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-72 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* The team */}
      <div className="mx-auto m-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                height={208}
                width={208}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
