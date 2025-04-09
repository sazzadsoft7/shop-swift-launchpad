
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ShoppingBag, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from "sonner";

// These would be fetched from an API in a real application
const templates = [
  {
    id: 'template-1',
    name: 'Modern Boutique',
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    description: 'Perfect for fashion and lifestyle brands.',
  },
  {
    id: 'template-2',
    name: 'Tech Galaxy',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    description: 'Ideal for electronics and gadget stores.',
  },
  {
    id: 'template-3',
    name: 'Home Essentials',
    image: 'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Great for home goods and decor stores.',
  },
];

const CreateStore = () => {
  const [step, setStep] = useState(1);
  const [storeName, setStoreName] = useState('');
  const [storeSlug, setStoreSlug] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleNextStep = () => {
    if (step === 1 && !storeName) {
      toast.error("Please enter a store name");
      return;
    }
    
    if (step === 2 && !storeSlug) {
      toast.error("Please enter a store URL");
      return;
    }
    
    if (step === 3 && !selectedTemplate) {
      toast.error("Please select a template");
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleCreateStore();
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleCreateStore = () => {
    setIsCreating(true);
    
    // Mock store creation
    setTimeout(() => {
      toast.success("Your store has been created successfully!");
      // Redirect would happen here
      setIsCreating(false);
    }, 2000);
  };
  
  // Auto-generate slug from store name
  const handleStoreNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setStoreName(name);
    
    // Generate slug: lowercase, replace spaces with hyphens, remove special chars
    const slug = name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
    
    setStoreSlug(slug);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="absolute top-8 left-8 inline-flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to home
      </Link>

      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="h-10 w-10 text-purple-600 mx-auto mb-2" />
          <h1 className="text-3xl font-bold">Create Your Store</h1>
          <p className="text-gray-600 mt-2">
            Your online store will be ready in seconds
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Progress Steps */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${step >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>
                    Store Details
                  </p>
                </div>
              </div>
              
              <div className="hidden sm:block w-12 h-0.5 bg-gray-200"></div>
              
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${step >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>
                    Store URL
                  </p>
                </div>
              </div>
              
              <div className="hidden sm:block w-12 h-0.5 bg-gray-200"></div>
              
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${step >= 3 ? 'text-gray-900' : 'text-gray-500'}`}>
                    Choose Template
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input
                    id="store-name"
                    placeholder="My Awesome Store"
                    value={storeName}
                    onChange={handleStoreNameChange}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    This will be the name of your online store.
                  </p>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="store-url">Store URL</Label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-gray-500 text-sm">
                      shopswift.com/
                    </span>
                    <Input
                      id="store-url"
                      placeholder="my-store"
                      value={storeSlug}
                      onChange={(e) => setStoreSlug(e.target.value)}
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    This will be your store's web address. You can connect a custom domain later.
                  </p>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h3 className="text-lg font-medium mb-4">Choose a template for your store</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <Card 
                      key={template.id}
                      className={`cursor-pointer overflow-hidden hover:border-purple-400 transition-colors ${
                        selectedTemplate === template.id ? 'border-2 border-purple-600' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="aspect-[4/3]">
                        <img 
                          src={template.image} 
                          alt={template.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{template.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {template.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={step === 1}
            >
              Back
            </Button>
            
            <Button
              onClick={handleNextStep}
              disabled={isCreating}
              className="gradient-bg"
            >
              {isCreating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : step === 3 ? (
                <>
                  Create Store
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStore;
