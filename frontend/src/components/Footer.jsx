export default function Footer() {
  return (    <footer className="px-1 sm:px-2 py-1 sm:py-2">
      <div className="flex items-center justify-center text-center px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7 bg-background-color dark:bg-dark-background-color rounded-lg">
        <p className="text-dark-background-color dark:text-background-color text-xs sm:text-sm">
          © 2024 Portfolio – React Template by{' '}
          <a
            href="https://github.com/chriag640"
            className="font-medium underline text-secondary-color"
          >
            Chirag
          </a>
        </p>
      </div>
    </footer>
  );
}
