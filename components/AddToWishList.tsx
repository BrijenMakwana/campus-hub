import { Button } from './ui/button';

import { Bookmark } from '~/lib/icons/Bookmark';

const AddToWishList = () => {
  return (
    <Button className="absolute bottom-7 right-7  items-center justify-center rounded-full bg-primary">
      <Bookmark className="text-foreground" size={23} strokeWidth={1.25} />
    </Button>
  );
};

export default AddToWishList;
