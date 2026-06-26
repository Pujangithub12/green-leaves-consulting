"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kuber Mani Nepal",
    role: "Director",
    bio: "Driving economic growth through sustainable, forward-thinking energy infrastructure.",
    imageUrl: "/Kuber-Mani-Nepal.jpg", // Replace with your image path
  },
  {
    name: "Prabin Dhakal",
    role: "Chief Executive Officer",
    bio: "Empowering communities and businesses with clean, reliable, and independent power solutions.",
    imageUrl: "/prabin.jpg", // Replace with your image path
  },
];

export default function TeamPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-500">
            A small, dedicated team focused on delivery, quality execution, and
            long-term sustainability.
          </p>
        </div>

        {/* Two-Column Profile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-200"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-gray-50">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                  style={{ height: "auto" }} // Prevents aspect ratio distortion warning
                  priority
                />
              </div>

              {/* Identity */}
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mt-1">
                {member.role}
              </p>

              {/* Bio */}
              <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs flex-grow">
                {member.bio}
              </p>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
