import { Link } from 'react-router-dom';
import { ItemFooter } from './Copyright.styled';

const Copyright = () => {
  return (
    <ItemFooter>
      {'© '} {new Date().getFullYear()}
      <Link
        color="inherit"
        // href="https://github.com/dmytroav"
        // href="https://github.com/igorklyopov"
        target="_blank"
        rel="noopener noreferrer"
      >
        by Dmytro Velkov
      </Link>
    </ItemFooter>
  );
};

export default Copyright;
