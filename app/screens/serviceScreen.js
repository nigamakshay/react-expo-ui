 
import { View } from 'react-native';
import { FullContainer } from 'containerStyles';

export const ServiceScreen = ({ navigation, route }) => {    
  const [selectedService, setSelectedService] = React.useState(null); 
  const [amount, setAmount] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [description, setDescription] = React.useState();
  const [showPicker, setShowPicker] = React.useState(true);
  const [products, setProducts] = React.useState({});
  const [data, setData] = React.useState(null);
  const [serviceCategory, setServiceCategory] = React.useState({});
  const [inProgress, setInProgress] = React.useState(true);
  const [partnerServiceId, setPartnerServiceId] = React.useState();
  const [deletedProductIds, setDeletedProductIds] = React.useState([]);

  const isFocused = useIsFocused();
  const userContext = useContext(AuthenticatedUserContext);
  
  useEffect(() => {
    if(options.route && options.route.params) {
      
      let deletedProductId = options.route.params.deletedProductId;
      if(!!deletedProductId && userContext.currentService) {
        let service = userContext.currentService;

        if(service.data && service.data.partnerService) {
          let ids = service.data.partnerService.deletedProductIds || [];
          ids.push(deletedProductId);
          service.data.partnerService.deletedProductIds = ids;
          userContext.setCurrentService({data: service});
          setDeletedProductIds(ids);
        }
      }
      options = options.route.params;      
    }

    setData(options);
    
    if(options.useContext && userContext.currentService) {     
      setData(userContext.currentService.data);
      options = userContext.currentService.data;      
    }

    if (options.partnerService) {
      // setShowPicker(false);
      setAmount(options.partnerService.amount);
      setMinutes(options.partnerService.duration);
      setDescription(options.partnerService.description);
      setProducts(options.partnerService.products);
      setSelectedService(options.partnerService.service_id);
      setPartnerServiceId(options.partnerService.id);
    }
    
    setSelectedService(options.service_id || (options.partnerService && 
      options.partnerService.service_id));
    setServiceCategory(options.serviceCategory);

    setInProgress(false);
  }, [isFocused]);

  const successCallback = () => {
    userContext.setCurrentService(null);
    navigation.popToTop();
    navigation.navigate('ServicesListScreen',
      { serviceCategory: serviceCategory }
    );
  }

  function allFieldsEntered() {
    return selectedService && minutes && amount && description;
  }

  function isSaveAllowed() {
    return allFieldsEntered() && Object.keys(products).length > 0;
  }
 
  return (
    <FullContainer>
      <View style={{width: '100%'}}>
      <VerticalScrollView style={{padding: 5}}>
      { showPicker &&
        <View style={{marginTop: 30}}>
          <MandatoryText style={{...titleStyle, marginBottom: 10}}
            text={'selectService'}>            
          </MandatoryText>
          <ServicePicker
            serviceCategory={serviceCategory}
            selectedService={selectedService}
            onValueChange={(value) => {
              setSelectedService(value)
            }}
          />
        </View>
      }

      <HorizontalView style={{width: '100%', marginTop: 20}}>
        <View style={{width: '50%'}}>
          <MandatoryText style={titleStyle} text={'duration'}></MandatoryText>
          <MinutesField 
            onChangeText={(value) => {
              setMinutes(value);
            }} 
            value={minutes}
          />  
        </View>
        <View style={{width: '50%'}}>
          <MandatoryText style={titleStyle} text={'serviceCost'}></MandatoryText>
          <AmountField
            onChangeText={(value) => {
              setAmount(value);
            }}
            value={amount}
          />
        </View>
      </HorizontalView>  

      <View style={{marginTop: 30}}></View>
      <MandatoryText style={titleStyle} text={'serviceDescription'}></MandatoryText>
      <TextAreaField 
        width={'100%'}
        placeholder={i18n.t("addServiceDescription")}
        onChangeText={(description) => {
          setDescription(description);
        }} 
        value={description}
      />   
      <SalhomeActivityIndicator animating={inProgress}/>
      <View style={{ width: '95%', marginBottom: 10}}>
        <PartnerServiceProductFlatList data={
          (userContext.currentService && userContext.currentService.data) || data || options}
        />
      </View>
      <FullContainer style={{margin: 20}}>
      <MandatoryText style={{...titleStyle, marginBottom: 10}}
          text={'addProductsForService'}>
        </MandatoryText>        
        <PressableButton
          {...bigButtonStyle}
          text={ i18n.t("addProduct") }
          disabled={!allFieldsEntered()}
          setColorOn={allFieldsEntered()}
          onPress={() => {
            let service = {
              data: {
                partnerService: {
                  id: partnerServiceId,
                  service_id: selectedService,
                  amount: amount,
                  duration: minutes,
                  description: description,
                  products: products,
                  deletedProductIds: deletedProductIds
                },
                service_id: options.service_id,
                serviceCategory: serviceCategory,
                }
              };

            userContext.setCurrentService(service);
            navigation.navigate('PartnerServiceProductForm', service);
          }}
        />

        <SaveButton
          payload={{
            id: partnerServiceId,
            data: {
              service_id: selectedService,
              description: description,
              amount: amount,
              duration: minutes,
              products: Object.values(products),
              delete_product: {
                ids: deletedProductIds
              }
            }
          }}
          disabled={!isSaveAllowed()}
          onPress={data && data.partnerService && data.partnerService.id>=1 ? editPartnerService : addPartnerService}
          setColorOn={isSaveAllowed()}
          successCallback={options.successCallback || successCallback}        
        />
      </FullContainer>
    </VerticalScrollView>
      </View>
    </FullContainer>
  );  
}