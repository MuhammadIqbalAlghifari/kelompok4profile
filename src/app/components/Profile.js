import Link from "next/link";
import { FaInstagram} from "react-icons/fa6";

export default function OurProfile() {
    return (
        <section id="about" className="flex bg-white flex-col w-full justify-center items-center gap-y-1.5 md:gap-y-6 p-10">
            <h1 className="md:text-4xl font-bold text-2xl text-center py-5">Our Profile</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <main id="iqbal" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/iqbal.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Muhammad Iqbal Alghifari</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207015</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 14 April 2004 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Jl. Asrama Nyantong, Gg. Pemuda</p>
                            <Link href="https://instagram.com/iqbaalgifari" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
                <main id="rachel" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/rachel.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Rachel Abdussalam</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207006</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 15 Mei 2004 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Kp. Sukasenang, Desa Sukahening</p>
                            <Link href="https://instagram.com/rachel_abdusalam" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
                <main id="ikhsan" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/ikhsan.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Nurul Ikhsan</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207020</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 26 Maret 2003 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Kp. Rawaginang, Leuwisari, Singaparna</p>
                            <Link href="https://instagram.com/nikhsan_03" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
                <main id="novaria" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/novaria.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Noor Avia Camelia</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207023</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 14 Juli 2003 di Ciamis, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Jl. Kujang, Cikoneng, Ciamis.</p>
                            <Link href="https://instagram.com/naviaac_" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
                <main id="nurlatifah" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/nurlatifah.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Nur Latifah</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207035</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 15 Mei 2004 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Kp. Sukasenang, Desa Sukahening</p>
                            <Link href="https://instagram.com/nrltfhnl" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
                <main id="neni" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/neni.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Neni Astriani</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207008</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 17 Maret 2001 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Jl. Sangkali, Gg. Makmur</p>
                            <Link href="https://instagram.com/astrianine" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
                <main id="nita" className="flex bg-[#f5f5f5] flex-col text-black overflow-hidden gap-y-3 rounded-xl shadow-lg">
                    <img src="/nita.jpeg" className="w-full object-cover object-center h-80"/>
                    <article className="flex p-6 flex-col justify-center items-center gap-y-1.5 md:gap-y-3">
                        <div className="flex flex-col justify-center items-center gap-y-0.5 md:gap-y-1.5">
                            <h1 className="text-lg text-center font-semibold">Nita Pebrianti</h1>
                            <h1 className="text-lg text-center font-semibold">C2283207006</h1>
                        </div>
                        <p className="text-center text-sm leading-relaxed">Lahir pada 5 Februari 2004 di Tasikmalaya, Jawa barat. Saat ini menjadi mahasiswa aktif di Universitas Muhammadiyah Tasikmalaya, Semester 4 di prodi Pendidikan Teknologi Informasi yang beralamat di Kp. Cilangkap, Desa cibatu, Kec. Karangnunggal</p>
                            <Link href="https://instagram.com/nitapebb_" rel="noopener noreferrer" target="_blank"><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-black"/></Link>
                    </article>
                </main>
            </div>
        </section>
    )
}