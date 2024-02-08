export type Params = {
  blogId: string;
};

export type blogType = {
  title: string;
  previewImage: {
    asset: {
      _ref: string;
    };
  };
  content: any;
  overview: string;
  slug: {
    current: string;
  };
  createdAt: string;
  _id: string;
};

export type imageType = {
  image: {
    asset: {
      _ref: string;
    };
  };
  description: string;
  _id: string;
};
