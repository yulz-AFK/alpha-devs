import { CalendarIcon, UserIcon } from "lucide-react";

export function ArticlePageWithBanner() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="relative h-[400px] mb-8">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Connecting with Volunteers"
          className="absolute inset-0 object-cover w-full h-full rounded-b-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-2 leading-tight">
            Connect with Volunteers on Bayani
          </h1>
          <div className="flex items-center text-sm">
            <UserIcon className="w-4 h-4 mr-2" />
            <span className="mr-4">Bayani Support</span>
            <CalendarIcon className="w-4 h-4 mr-2" />
            <time dateTime="2023-07-15">Updated 3 months ago</time>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0">
        <div className="prose max-w-none">
          <p>
            Recruiting volunteers through Bayani is about sharing a story that resonates with Filipinos. It's about finding the right people who are passionate about your cause. Below are some recommendations to help you craft the perfect volunteer opportunity for your organization.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            1. A catchy title goes a long way
          </h2>
          <p>
            The title is the first thing potential volunteers see, so it should inspire action. Be creative, make it eye-catching, and clearly state the activity. Examples include:
          </p>
          <ul>
            <li>"Magdala ng ngiti sa senior—maghatid ng pagkain!"</li>
            <li>"Magaling ka ba sa math? Maging tutor!"</li>
            <li>"Tumulong sa bata. Maging court guardian."</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            2. It's all in the details
          </h2>
          <p>
            Volunteers search using keywords, cause areas, and skills. Use detailed and relevant keywords in your title and description, and make sure to select applicable causes and skills to match the right volunteers in the Philippines.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            3. Pick the right Opportunity Contact
          </h2>
          <p>
            Ensure that the contact person assigned to an opportunity is ready to respond quickly. This person will handle inquiries and connect with volunteers. Add them to your organization's account to ensure smooth communication.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            4. Make use of Bayani’s Pro Member Tools
          </h2>
          <p>
            If you're a Pro Member on Bayani, take advantage of tools designed to help manage your recruitment:
          </p>
          <ul>
            <li>Repost opportunities with one-click to stay visible in search results</li>
            <li>Automatically share important documents with volunteers</li>
            <li>Embed your Bayani opportunities into your own website</li>
            <li>Copy an opportunity to easily create similar posts</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
