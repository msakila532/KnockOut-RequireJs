function AppViewModel() {
  var self = this;
  self.selectedProductDetails = ko.observable([]);
  self.hasBeenSubmitted = ko.observable(false);
  self.priceLowBound = ko.observable(0);
  self.priceHighBound = ko.observable(100000);
  self.sortMethod = ko.observable("asc");

  self.selectPhone = function (data) {
    self.selectedProductDetails([{ ...data }]);
    self.hasBeenSubmitted(true);
  };

  self.goBack = function () {
    self.hasBeenSubmitted(false);
  };

  self.filterPrice = function () {
    var priceDOM = document.getElementById("priceDropDown");
    var price = priceDOM.value.split("-");
    self.priceLowBound(price[0]);
    self.priceHighBound(price[1]);
  };

  self.sortWithPrice = function () {
    var sortDOM = document.getElementById("sortDropDown");
    self.sortMethod(sortDOM.value);
  };

  self.masterProducts = ko.observable([
    {
      mobileName: "Greenlam",
      price: 49096,
      sku: 1,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m1.jpg"
    },
    {
      mobileName: "Lotlux",
      price: 28239,
      sku: 2,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m2.jpeg"
      },
    {
      mobileName: "Vagram",
      price: 50091,
      sku: 3,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m3.jpeg"

      },
    {
      mobileName: "Stringtough",
      price: 18180,
      sku: 4,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m4.jpg"

      },
    {
      mobileName: "Bytecard",
      price: 53284,
      sku: 5,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m5.jpg"

      },
    {
      mobileName: "Lotstring",
      price: 62532,
      sku: 6,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m6.jpg"
      },
    {
      mobileName: "Sub-Ex",
      price: 67852,
      sku: 7,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m7.png"

      },
    {
      mobileName: "Lotstring",
      price: 17811,
      sku: 8,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m8.jpg"
      },
    {
      mobileName: "Cardify",
      price: 59245,
      sku: 9,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m9.png"
      },
    {
      mobileName: "Quo Lux",
      price: 27795,
      sku: 10,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m10.jpg"
      },
    {
      mobileName: "Zamit",
      price: 51399,
      sku: 11,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m11.jpg"
      },
    {
      mobileName: "Zathin",
      price: 39025,
      sku: 12,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m12.jpg"
      },
    {
      mobileName: "Regrant",
      price: 21229,
      sku: 13,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m13.jpg"
      },
    {
      mobileName: "Bamity",
      price: 47134,
      sku: 14,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m14.jpg"
      },
    {
      mobileName: "Gembucket",
      price: 57680,
      sku: 15,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m15.jpg"
      },
    {
      mobileName: "Overhold",
      price: 24447,
      sku: 16,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m16.jpg"
      },
    {
      mobileName: "Pannier",
      price: 58331,
      sku: 17,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m17.jpeg"
      },
    {
      mobileName: "Home Ing",
      price: 14165,
      sku: 18,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m18.jpg"

      },
    {
      mobileName: "Voltsillam",
      price: 42003,
      sku: 19,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m19.jpg"

      },
    {
      mobileName: "Subin",
      price: 22357,
      sku: 20,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m20.jpg"
      },
  ]);

  // list of available products
  self.availableProducts = ko.observableArray([
    {
      mobileName: "Greenlam",
      price: 49096,
      sku: 1,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m1.jpg"
    },
    {
      mobileName: "Lotlux",
      price: 28239,
      sku: 2,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m2.jpeg"

      },
    {
      mobileName: "Vagram",
      price: 50091,
      sku: 3,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m3.jpeg"

      },
    {
      mobileName: "Stringtough",
      price: 18180,
      sku: 4,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m4.jpg"

      },
    {
      mobileName: "Bytecard",
      price: 53284,
      sku: 5,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m5.jpg"

      },
    {
      mobileName: "Lotstring",
      price: 62532,
      sku: 6,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m6.jpg"

      },
    {
      mobileName: "Sub-Ex",
      price: 67852,
      sku: 7,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m7.png"

      },
    {
      mobileName: "Lotstring",
      price: 17811,
      sku: 8,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m8.jpg"

      },
    {
      mobileName: "Cardify",
      price: 59245,
      sku: 9,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m9.png"

      },
    {
      mobileName: "Quo Lux",
      price: 27795,
      sku: 10,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m10.jpg"

      },
    {
      mobileName: "Zamit",
      price: 51399,
      sku: 11,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
        imagePLP:"images/m11.jpg"

      },
    {
      mobileName: "Zathin",
      price: 39025,
      sku: 12,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m12.jpg"

      },
    {
      mobileName: "Regrant",
      price: 21229,
      sku: 13,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m13.jpg"

      },
    {
      mobileName: "Bamity",
      price: 47134,
      sku: 14,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m14.jpg"

      },
    {
      mobileName: "Gembucket",
      price: 57680,
      sku: 15,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m15.jpg"

      },
    {
      mobileName: "Overhold",
      price: 24447,
      sku: 16,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m16.jpg"

      },
    {
      mobileName: "Pannier",
      price: 58331,
      sku: 17,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m17.jpeg"

      },
    {
      mobileName: "Home Ing",
      price: 14165,
      sku: 18,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m18.jpg"

      },
    {
      mobileName: "Voltsillam",
      price: 42003,
      sku: 19,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m19.jpg"

      },
    {
      mobileName: "Subin",
      price: 22357,
      sku: 20,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:"images/m20.jpg"
      },

  ]);

  self.pageNumber = ko.observable(0);
  self.productsPerPage = 4;
  self.totalPages = ko.computed(function () {
    var div = Math.floor(self.masterProducts().length / self.productsPerPage);
    div += self.masterProducts().length % self.productsPerPage > 0 ? 1 : 0;
    return div;
  });

  self.totalPagesArray = ko.observable([]);
  for (let i = 1; i <= self.totalPages(); i++) {
    self.totalPagesArray([...self.totalPagesArray(), i]);
  }

  self.selectPage = function (data) {
    self.pageNumber(data - 1);
  };

  self.availableProducts = ko.computed(function () {
    const predicate1 =
      (low, high) =>
      ({ price }) =>
        price >= low && price <= high;

    var first = self.pageNumber() * self.productsPerPage;
    let paginatedItems = self
      .masterProducts()
      .slice(first, first + self.productsPerPage);
    let paginatedFilteredItems = paginatedItems.filter(
      predicate1(self.priceLowBound(), self.priceHighBound())
    );

    return _.orderBy(paginatedFilteredItems, "price", self.sortMethod());
  });

  self.next = function () {
    if (self.pageNumber() < self.totalPages() - 1) {
      self.pageNumber(self.pageNumber() + 1);
    }
  };

  self.previous = function () {
    if (self.pageNumber() != 0) {
      self.pageNumber(self.pageNumber() - 1);
    }
  };
}

ko.applyBindings(new AppViewModel());
