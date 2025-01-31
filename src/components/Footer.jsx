export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Created by:</p>
          <div className="space-y-2">
            <p>Henry Tristan</p>
            <p>Andi Lauda</p>
            <p>Claudia Metta Wibowo</p>
            <p>Angelica Metta Tan</p>
            <p>Cynthia Salim</p>
          </div>
          <p className="mt-6 text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
