import { Button, Form } from 'react-bootstrap';
import { Search } from '../../icons/Search';

interface SearchbarProps {
  onSearch: (query: string) => void;  // Callback to handle search query
}

export const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {

  return (
    <Form>
      <Form.Group className="mb-3 position-relative">
        <Form.Control
          type="text"
          placeholder="Type here to Search Persons"
          size="lg"
          onChange={(e) => onSearch(e.target.value)}  // Update query state on change
          className="pe-5"
        />
        <Button
          bsPrefix="none border-0 position-absolute bg-transparent top-50 end-0 me-2 lh-1 p-2 translate-middle-y"
          type="submit"
        >
          <Search />
        </Button>
      </Form.Group>
    </Form>
  );
};
