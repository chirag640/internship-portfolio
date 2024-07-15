export default function Footer() {
  return (
    <footer className="px-2 py-2">
      <div className="flex items-center justify-center text-center px-7 py-7 bg-background-color dark:bg-dark-background-color  rounded-lg">
        <p className="text-dark-background-color dark:text-background-color">
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
