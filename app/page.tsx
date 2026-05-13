export default function TeacherPortfolioTemplate() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] text-[#2f2a26] font-sans">
      {/* Navigation */}
      <header className="sticky top-0 bg-[#f8f4ef]/90 backdrop-blur border-b border-[#e2d6c8] z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold tracking-wide">Yisa Hu</h1>
            <p className="text-sm text-[#8b6f57]">English Teacher Portfolio</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#about" className="hover:text-[#8b5e3c] transition">About</a>
            <a href="#skills" className="hover:text-[#8b5e3c] transition">Skills</a>
            <a href="#philosophy" className="hover:text-[#8b5e3c] transition">Philosophy</a>
            <a href="#experience" className="hover:text-[#8b5e3c] transition">Experience</a>
            <a href="#portfolio" className="hover:text-[#8b5e3c] transition">Portfolio</a>
            <a href="#contact" className="hover:text-[#8b5e3c] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-6">
            Teaching Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Supporting learners through clarity, structure, and meaningful learning.
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-10 max-w-xl">
            I currently teach upper elementary and high school English learners in mixed-ability classrooms. My teaching focuses on differentiated instruction, language development, structured learning, and helping students build confidence through meaningful engagement.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#7a4f34] text-white rounded-full text-sm hover:bg-[#5f3b27] shadow-sm transition">
              View Portfolio
            </button>

            <button className="px-6 py-3 border border-[#b99676] text-[#6f4b34] rounded-full text-sm hover:bg-[#efe4d8] transition">
              Download Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[340px] h-[440px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center text-[#8b6f57] text-lg">
            Add Your Photo
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Mixed-Ability Instruction',
              text: 'Experience supporting learners with diverse language proficiency and academic needs.'
            },
            {
              title: 'ELL Support',
              text: 'Focused scaffolding for listening, speaking, reading, and writing development.'
            },
            {
              title: 'Faith-Integrated Teaching',
              text: 'Connecting learning with character, purpose, and thoughtful reflection.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#eadfd4] hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium mb-4 text-[#7a4f34]">{item.title}</h3>
              <p className="text-gray-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-5">
              About Me
            </p>

            <h3 className="text-4xl font-light mb-8 leading-tight">
              Building structured and supportive classrooms for English learners.
            </h3>
          </div>

          <div>
            <p className="text-gray-600 leading-8 mb-6">
              Replace this section with your own professional introduction. You can briefly discuss your educational background, current teaching experience, and instructional strengths.
            </p>

            <p className="text-gray-600 leading-8">
              This layout works especially well for concise but professional writing. Avoid overly long paragraphs. Short sections with clear spacing look more modern and easier to read.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#fffdf9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-5">
            Skills
          </p>

          <h3 className="text-4xl font-light mb-16">
            Areas of Teaching Practice
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Differentiated Instruction',
              'Lesson & Unit Planning',
              'ELL Language Support',
              'Classroom Management',
              'Student Engagement',
              'Assessment & Feedback',
              'Biblical Integration',
              'Collaborative Learning'
            ].map((skill, index) => (
              <div
                key={index}
                className="border border-[#e5d7c8] rounded-2xl px-6 py-5 text-lg bg-[#fbf7f1] hover:bg-[#f2e7da] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-5">
          Teaching Philosophy
        </p>

        <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-gray-800">
          “Whoever our students may be, whatever the subject we teach, ultimately we teach who we are.”
        </blockquote>

        <p className="mt-6 text-[#8b6f57]">— Parker J. Palmer</p>

        <div className="mt-16 text-left max-w-3xl mx-auto text-gray-600 leading-8 space-y-6">
          <p>
            Replace this section with your own teaching philosophy. Consider discussing how you support different learners, how you create structure in the classroom, and how you encourage meaningful learning.
          </p>

          <p>
            Shorter paragraphs and intentional spacing help the page feel more professional and easier to navigate.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#fffdf9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-5">
            Experience
          </p>

          <h3 className="text-4xl font-light mb-16">
            Teaching Experience
          </h3>

          <div className="space-y-10">
            {[
              {
                role: 'English Teacher',
                school: 'Beijing Gospel Church School',
                year: '2025 – Present'
              },
              {
                role: 'Student Teacher',
                school: 'Unity Christian High School',
                year: '2024'
              },
              {
                role: 'ESL / Camp Teaching',
                school: 'Various Educational Settings',
                year: 'Previous Experience'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-10 grid md:grid-cols-3 gap-8"
              >
                <div>
                  <h4 className="text-2xl font-medium mb-2">{item.role}</h4>
                  <p className="text-[#8b6f57]">{item.year}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xl mb-4">{item.school}</p>
                  <p className="text-gray-600 leading-8">
                    Replace this section with your own description of responsibilities, classroom context, and instructional focus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-24">
        <p className="uppercase tracking-[0.3em] text-sm text-[#8b6f57] mb-5">
          Portfolio
        </p>

        <h3 className="text-4xl font-light mb-16">
          Teaching Artifacts
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Lesson Plans',
            'Unit Plans',
            'Student Work Samples',
            'Classroom Activities',
            'Assessments',
            'Professional Reflection'
          ].map((item, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-3xl bg-white border border-[#eadfd4] shadow-sm p-8 flex items-end text-2xl font-light hover:bg-[#fbf3ea] hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#3a2f2a] text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-5">
            Contact
          </p>

          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-10">
            Thank you for visiting my portfolio.
          </h3>

          <div className="space-y-4 text-lg text-gray-300">
            <p>Email: your-email@example.com</p>
            <p>Location: Beijing, China</p>
            <p>Resume and references available upon request.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
